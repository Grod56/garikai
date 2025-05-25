import { Image } from "@/app-library/utility-types/image";
import {
	PostPreviewModel,
	PostPreviewModelView,
} from "../../components/content/post-preview/post-preview";

export interface NewPostPreviewModelParameters {
	id: string;
	title: string;
	postLink: URL;
	author: string;
	publishedDate: Date;
	thumbnail: Image;
}

export function newPostPreviewModel({
	id,
	title,
	postLink,
	author,
	publishedDate,
	thumbnail,
}: NewPostPreviewModelParameters): PostPreviewModel {
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
