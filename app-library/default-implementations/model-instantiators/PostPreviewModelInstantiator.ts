import { Image } from "@/app-library/custom-types/Image";
import {
	PostPreviewModel,
	PostPreviewModelView,
} from "../../components/content/post-preview/PostPreviewModel";

export interface InstantiatePostPreviewModelParameters {
	id: string;
	title: string;
	postLink: URL;
	author: string;
	publishedDate: Date;
	thumbnail: Image;
}

export function instantiatePostPreviewModel({
	id,
	title,
	postLink,
	author,
	publishedDate,
	thumbnail,
}: InstantiatePostPreviewModelParameters): PostPreviewModel {
	return {
		modelView: {
			id,
			title,
			postLink,
			thumbnail,
			get byline(): string {
				return `${author} | ${publishedDate.toLocaleDateString(
					"en-US",
					{ year: "numeric", month: "long", day: "numeric" }
				)}`;
			},
		} as PostPreviewModelView,
	};
}
