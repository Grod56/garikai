"use client";
import { useEffect, useState } from "react";
import { removeMarkup } from "@/app/utilities/general";
import postPreviewModelInstantiator, {
	PostPreviewModelInstance,
} from "../components/corporeal/widgets/post-preview/PostPreviewModel";
import { Image } from "../types/Image";

// TODO: To be fixed
export function usePostPreviewRepository(): [
	PostPreviewModelInstance | undefined,
	Array<PostPreviewModelInstance> | undefined,
] {
	const endpoint = new URL(
		process.env.NEXT_PUBLIC_POST_PREVIEW_ENDPOINT_URL!
	);
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
						thumbnail: {
							source: focalPostJSON.images[0].url,
							alt: "Fpcal post thumbnail",
							placeholder:
								"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
						} as Image,
						title: focalPostJSON.title,
						snippet: removeMarkup(focalPostJSON.content),
						author: focalPostJSON.author.displayName,
						publishedDate: new Date(focalPostJSON.published),
						link: new URL(focalPostJSON.url),
						orientation: "flexible",
					})
				);
				const postPreviews: PostPreviewModelInstance[] =
					parsedJSON.items.map((item: any) => {
						return postPreviewModelInstantiator.instantiate({
							id: item.id,
							thumbnail: {
								source: item.images[0].url,
								alt: "Post thumbnail",
								placeholder:
									"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
							} as Image,
							title: item.title,
							snippet: removeMarkup(item.content),
							author: item.author.displayName,
							publishedDate: new Date(item.published),
							link: new URL(item.url),
							orientation: "vertical",
						});
					});
				setLatestPosts(postPreviews);
			})
			.catch((error: Error) => {
				console.error(`An error occurred. ${error}`);
			});
	}, []);

	return [focalPost, latestPosts];
}
