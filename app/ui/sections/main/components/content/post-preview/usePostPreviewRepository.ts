"use client";
import { useEffect, useState } from "react";
import {
	PostPreviewModelInstance,
	PostPreviewModelInstantiator,
} from "./PostPreviewModel";
import { removeMarkup } from "@/app/utilities/general";

// TODO: To be fixed
export function usePostPreviewRepository(
	endpoint: URL,
	postPreviewModelInstantiator: PostPreviewModelInstantiator
): [
	PostPreviewModelInstance | undefined,
	Array<PostPreviewModelInstance> | undefined,
] {
	const [focalPost, setFocalPost] = useState<PostPreviewModelInstance>();
	const [latestPosts, setLatestPosts] =
		useState<Array<PostPreviewModelInstance>>();

	useEffect(() => {
		fetch(endpoint, {
			headers: { "Content-Type": "application/json" },
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				} else {
					Promise.reject(new Error(response.statusText));
				}
			})
			.then((json) => {
				const parsedJSON: any = JSON.parse(JSON.stringify(json));
				const focalPostJSON: any = parsedJSON.items[0];
				setFocalPost(
					postPreviewModelInstantiator.instantiate({
						id: focalPostJSON.id,
						thumbnail: focalPostJSON.images[0].url,
						title: focalPostJSON.title,
						snippet: removeMarkup(focalPostJSON.content),
						author: focalPostJSON.author.displayName,
						publishedDate: new Date(focalPostJSON.published),
						link: new URL(focalPostJSON.url),
						isFlexible: true,
					})
				);
				const postPreviews: PostPreviewModelInstance[] =
					parsedJSON.items.map((item: any) => {
						return postPreviewModelInstantiator.instantiate({
							id: item.id,
							thumbnail: item.images[0].url,
							title: item.title,
							snippet: removeMarkup(item.content),
							author: item.author.displayName,
							publishedDate: new Date(item.published),
							link: new URL(item.url),
							isFlexible: false,
						});
					});
				setLatestPosts(postPreviews);
			})
			.catch((error: Error) => {
				console.log(`An error occurred. ${error}`);
			});
	}, []);

	return [focalPost, latestPosts];
}
