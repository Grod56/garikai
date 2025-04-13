import { ContentComponentModelInstance } from "@/app/components/content/ContentComponentModel";
import { Image } from "@/app/custom-types/Image";

export interface BookPreviewModel {
	readonly modelInstance: BookPreviewModelInstance;
}

export interface BookPreviewModelInstance
	extends ContentComponentModelInstance {
	readonly title: string;
	readonly author: string;
	readonly link: URL;
	readonly cover: Image;
}

export function useBookPreviewModel(
	id: string,
	title: string,
	author: string,
	link: URL,
	cover: Image
): BookPreviewModel {
	return {
		modelInstance: {
			id,
			title,
			author,
			link,
			cover,
		},
	};
}
