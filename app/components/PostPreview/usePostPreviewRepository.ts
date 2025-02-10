'use client'
import { useEffect, useState } from "react";
import { FocalPostModel } from "../FocalPost/FocalPostModel";
import { NormalPostModel } from "../NormalPost/NormalPostModel";
import { PostPreviewModel } from "./PostPreviewModel";
import { removeMarkup } from "@/app/utilities/RemoveMarkup";

export function usePostPreviewRepository(
    focalPostEndPoint: URL,
    latestPostsEndpoint: URL,
    popularPostsEndpoint: URL
): [FocalPostModel | undefined, Array<NormalPostModel> | undefined, Array<NormalPostModel> | undefined] {
    const [focalPostModel, setFocalPost] = useState<FocalPostModel>();
    const [latestPostModels, setLatestPosts] = useState<Array<PostPreviewModel>>();
    const [popularPostModels, setPopularPosts] = useState<Array<PostPreviewModel>>();

    async function retrieve(isFlexible: boolean, endpoint: URL): Promise<Array<PostPreviewModel>> {

        return await fetch(endpoint, {
            headers: {"Content-Type":"application/json"}
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                Promise.reject(new Error(response.statusText))
            }
        })
        .then((json) => {
            const parsedJSON: any = JSON.parse(JSON.stringify(json))
            if (Array.isArray(parsedJSON.items)) {
                const postPreviews: PostPreviewModel[] = parsedJSON.items.map((item: any) => {
                        return new PostPreviewModel(
                            // TODO: Chickity check this out y'all
                            item.id,
                            item.images[0].url,
                            item.title,
                            removeMarkup(item.content),
                            item.author.displayName,
                            new Date(item.published),
                            isFlexible
                        );
                });
                return postPreviews
            }
            else {
                return [new PostPreviewModel(
                    // TODO: Chickity check this out y'all
                    parsedJSON.id,
                    parsedJSON.images[0].url,
                    parsedJSON.title,
                    removeMarkup(parsedJSON.content),
                    parsedJSON.author.displayName,
                    new Date(parsedJSON.published),
                    isFlexible
                )]
            }
        })
        .catch((error: Error) => {
            console.log(`An error occurred. Retrying now. ${error}`);
            return (new Promise((resolve) => setTimeout(resolve, 3000))).then(() => retrieve(isFlexible, endpoint));
        })
    }

    useEffect(() => {    
        async function retrieveFocalPost(): Promise<FocalPostModel> {
            return await retrieve(true, focalPostEndPoint).then((allPosts) => {
                const postPreview: PostPreviewModel = allPosts[0];
                const focalPost: FocalPostModel = new FocalPostModel(
                    postPreview.id,
                    postPreview.postThumbnailSource,
                    postPreview.postTitle,
                    postPreview.postText,
                    postPreview.postAuthor,
                    postPreview.postDate
                );
                return focalPost;
            });
        }
        retrieveFocalPost().then((focalPost) => setFocalPost(focalPost));

    }, [])

    useEffect(() => {
        async function retrieveLatestPosts(): Promise<Array<NormalPostModel>> {
            return await retrieve(false, latestPostsEndpoint).then(allPosts => {
                return allPosts.map((post) => new NormalPostModel(
                    post.id,
                    post.postThumbnailSource,
                    post.postTitle,
                    post.postText,
                    post.postAuthor,
                    post.postDate
                ))
            });
        }
        retrieveLatestPosts().then((latestPosts) => setLatestPosts(latestPosts));
    }, [])

    useEffect(() => {
        async function retrievePopularPosts(): Promise<Array<NormalPostModel>> {
            return await retrieve(false, popularPostsEndpoint).then(allPosts => {
                return allPosts.map((post) => new NormalPostModel(
                    post.id,
                    post.postThumbnailSource,
                    post.postTitle,
                    post.postText,
                    post.postAuthor,
                    post.postDate
                ))
            });
        }
        retrievePopularPosts().then((popularPosts) => setPopularPosts(popularPosts));
    }, [])
    

    return [focalPostModel, latestPostModels, popularPostModels]
}