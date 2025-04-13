import { Image } from "@/app/custom-types/Image";
import { ContentComponentModelInstance } from "../ContentComponentModel";
import { ReadonlyComponentModel } from "../../ComponentModel";

export interface PostPreviewModel extends ReadonlyComponentModel {
	readonly modelInstance: PostPreviewModelInstance;
}

export interface PostPreviewModelInstance
	extends ContentComponentModelInstance {
	readonly thumbnail: Image;
	readonly title: string;
	readonly snippet: string;
	readonly byline: string;
	readonly link: URL;
	readonly orientation: Orientation;
}

export function usePostPreviewModel(
	id: string,
	title: string,
	snippet: string,
	link: URL,
	author: string,
	publishedDate: Date,
	thumbnail: Image,
	orientation: Orientation
): PostPreviewModel {
	return {
		modelInstance: {
			id,
			title,
			snippet,
			link,
			thumbnail,
			orientation,
			get byline(): string {
				return `${author} | ${publishedDate.toLocaleDateString(
					"en-US",
					{ year: "numeric", month: "long", day: "numeric" }
				)}`;
			},
		} as PostPreviewModelInstance,
	};
}
