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
                        {
                            // TODO: Chickity check this out y'all
                            id: item.id,
                            postURL: new URL(item.url),
                            postThumbnailSource: item.images[0].url,
                            postTitle: item.title,
                            postText: removeMarkup(item.content),
                            postAuthor: item.author.displayName,
                            postDate: new Date(item.published),
                            isFlexible
                        }
                    );
                });
                return postPreviews
            }
            else {
                return [new PostPreviewModel(
                    {
                        // TODO: Chickity check this out y'all
                        id: parsedJSON.id,
                        postURL: new URL(parsedJSON.url),
                        postThumbnailSource: parsedJSON.images[0].url,
                        postTitle: parsedJSON.title,
                        postText: removeMarkup(parsedJSON.content),
                        postAuthor: parsedJSON.author.displayName,
                        postDate: new Date(parsedJSON.published),
                        isFlexible
                    }
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
                    { id: postPreview.id, postURL: postPreview.postURL, postThumbnailSource: postPreview.postThumbnailSource, postTitle: postPreview.postTitle, postText: postPreview.postText, postAuthor: postPreview.postAuthor, postDate: postPreview.postDate }                );
                return focalPost;
            });
        }
        retrieveFocalPost().then((focalPost) => setFocalPost(focalPost));

    }, [])

    useEffect(() => {
        async function retrieveLatestPosts(): Promise<Array<NormalPostModel>> {
            return await retrieve(false, latestPostsEndpoint).then(allPosts => {
                return allPosts.map((post) => new NormalPostModel(
                    {
                        id: post.id,
                        postURL: post.postURL,
                        postThumbnailSource: post.postThumbnailSource,
                        postTitle: post.postTitle,
                        postText: post.postText,
                        postAuthor: post.postAuthor,
                        postDate: post.postDate
                    }
                ))
            });
        }
        retrieveLatestPosts().then((latestPosts) => setLatestPosts(latestPosts));
    }, [])

    useEffect(() => {
        async function retrievePopularPosts(): Promise<Array<NormalPostModel>> {
            return await retrieve(false, popularPostsEndpoint).then(allPosts => {
                return allPosts.map((post) => new NormalPostModel(
                    {
                        id: post.id,
                        postURL: post.postURL,
                        postThumbnailSource: post.postThumbnailSource,
                        postTitle: post.postTitle,
                        postText: post.postText,
                        postAuthor: post.postAuthor,
                        postDate: post.postDate
                    }
                ))
            });
        }
        retrievePopularPosts().then((popularPosts) => setPopularPosts(popularPosts));
    }, [])
    

    return [focalPostModel, latestPostModels, popularPostModels]
}