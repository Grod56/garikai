'use client'
import { useEffect, useState } from "react";
import { PostPreviewModelInstance, PostPreviewModelInstantiator } from "./PostPreviewModel";
import { removeMarkup } from "@/app/utilities/general";


// TODO: To be fixed
export function usePostPreviewRepository(
    endpoint: URL,
    postPreviewModelInstantiator: PostPreviewModelInstantiator
): [PostPreviewModelInstance | undefined, Array<PostPreviewModelInstance> | undefined] {
    const [focalPost, setFocalPost] = useState<PostPreviewModelInstance>();
    const [latestPosts, setLatestPosts] = useState<Array<PostPreviewModelInstance>>();

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
            setFocalPost(postPreviewModelInstantiator.instantiate(
                focalPostJSON.id,
                focalPostJSON.images[0].url,
                focalPostJSON.title,
                removeMarkup(focalPostJSON.content),
                focalPostJSON.author.displayName,
                new Date(focalPostJSON.published),
                new URL(focalPostJSON.url),
                true
            ))
            const postPreviews: PostPreviewModelInstance[] = parsedJSON.items.map((item: any) => {
                return postPreviewModelInstantiator.instantiate(
                    item.id,
                    item.images[0].url,
                    item.title,
                    removeMarkup(item.content),
                    item.author.displayName,
                    new Date(item.published),
                    new URL(item.url),
                    false
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