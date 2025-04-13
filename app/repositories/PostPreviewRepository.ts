"use client";
import { useEffect, useState } from "react";
import { removeMarkup } from "@/app/utilities/general";
import {
	PostPreviewModel,
	usePostPreviewModel,
} from "../components/content/post-preview/PostPreviewModel";

// TODO: To be fixed
export function usePostPreviewRepository(): {
	focalPost: PostPreviewModel | undefined;
	latestPosts: Array<PostPreviewModel> | undefined;
} {
	const endpoint = new URL(
		process.env.NEXT_PUBLIC_POST_PREVIEW_ENDPOINT_URL!
	);
	const [focalPost, setFocalPost] = useState<PostPreviewModel>();
	const [latestPosts, setLatestPosts] = useState<Array<PostPreviewModel>>();

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
				const parsedJSON = JSON.parse(JSON.stringify(json));
				const focalPostJSON = parsedJSON.items[0];

				const focalPostPreviewModel = usePostPreviewModel(
					`focal-post-preview_${focalPostJSON.id}`,
					focalPostJSON.title,
					removeMarkup(focalPostJSON.content),
					new URL(focalPostJSON.url),
					focalPostJSON.author.displayName,
					new Date(focalPostJSON.published),
					{
						source: focalPostJSON.images[0].url,
						alt: "Focal post thumbnail",
						placeholder:
							"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
					},
					"flexible"
				);
				const postPreviewModels: PostPreviewModel[] =
					parsedJSON.items.map((item: any) => {
						const postPreviewModel = usePostPreviewModel(
							`post-preview_${item.id}`,
							item.title,
							removeMarkup(item.content),
							new URL(item.url),
							item.author.displayName,
							new Date(item.published),
							{
								source: item.images[0].url,
								alt: "Post thumbnail",
								placeholder:
									"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAFCAYAAAB4ka1VAAAAAXNSR0IArs4c6QAAALBJREFUGFcBpQBa/wGqqqr/LSwtAMbNzgDk7fEAo7KSAFVUQQBnRnYA8/HwAAG3t7f/JSMkAMLJywDY3d0AsbemAJ+NmQAZFhsA29zaAAG4uLj/HRocALvBvQDYv5kAFhQaAP8MGAAMEBcADBMeAAGnp6j/KygpAObl3QDJrY0AAwUKADtNZwDx9/4ArbOrAAGLi4v/LS0tABcVFQDfxaEA4fEGAA4XIQAiICkAkJF/AL0PQDh4YdUeAAAAAElFTkSuQmCC",
							},
							"vertical"
						);
						return postPreviewModel;
					});
				setFocalPost(focalPostPreviewModel);
				setLatestPosts(postPreviewModels);
			})
			.catch((error: Error) => {
				console.error(`An error occurred: ${error}`);
			});
	}, []);

	return { focalPost, latestPosts };
}
