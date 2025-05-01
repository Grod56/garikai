import { Image } from "@/app-library/custom-types/Image";
import { BookPreviewModel } from "../../../components/content/book-preview/BookPreviewModel";

export interface InstantiateBookPreviewModelParameters {
	id: string;
	title: string;
	author: string;
	bookLink: URL;
	cover: Image;
}

export function instantiateBookPreviewModel({
	id,
	title,
	author,
	bookLink,
	cover,
}: InstantiateBookPreviewModelParameters): BookPreviewModel {
	return {
		modelInstance: {
			id,
			title,
			author,
			bookLink,
			cover,
		},
	};
}
