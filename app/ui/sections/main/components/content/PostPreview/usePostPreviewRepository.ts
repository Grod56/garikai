'use client'
import { useEffect, useState } from "react";
import { PostPreviewModel } from "./PostPreviewModel";
import { removeMarkup } from "@/app/utilities/RemoveMarkup";

export function usePostPreviewRepository(
    endpoint: URL
): [PostPreviewModel | undefined, Array<PostPreviewModel> | undefined] {
    const [focalPost, setFocalPost] = useState<PostPreviewModel>();
    const [latestPosts, setLatestPosts] = useState<Array<PostPreviewModel>>();

    useEffect(() => {
        fetch(endpoint, {
            headers: {"Content-Type":"application/json"}
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                Promise.reject(new Error(response.statusText))
            }
        })
        .then((json) => {
            const parsedJSON: any = JSON.parse(JSON.stringify(json))
            const focalPostJSON: any = parsedJSON.items[0];
            setFocalPost(new PostPreviewModel({
                id: focalPostJSON.id,
                postURL: new URL(focalPostJSON.url),
                postThumbnailSource: focalPostJSON.images[0].url,
                postTitle: focalPostJSON.title,
                postText: removeMarkup(focalPostJSON.content),
                postAuthor: focalPostJSON.author.displayName,
                postDate: new Date(focalPostJSON.published),
                isFlexible: true
            }))
            const postPreviews: PostPreviewModel[] = parsedJSON.items.map((item: any) => {
                return new PostPreviewModel(
                    {
                        id: item.id,
                        postURL: new URL(item.url),
                        postThumbnailSource: item.images[0].url,
                        postTitle: item.title,
                        postText: removeMarkup(item.content),
                        postAuthor: item.author.displayName,
                        postDate: new Date(item.published),
                        isFlexible: false
                    }
                );
            });
            setLatestPosts(postPreviews)
        })
        .catch((error: Error) => {
            console.log(`An error occurred. ${error}`);
        })
    }, []);

    return [focalPost, latestPosts]
}