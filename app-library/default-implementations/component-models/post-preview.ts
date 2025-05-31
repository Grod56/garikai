import { Image } from "@/app-library/utility-types/image";
import { newReadonlyModel } from "@mvc-react/mvc";
import { PostPreviewModel } from "../../components/content/post-preview/post-preview-model";

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
	return newReadonlyModel({
		id,
		title,
		postLink,
		thumbnail,
		get byline(): string {
			return `${author} | ${publishedDate.toLocaleDateString("en-US", {
				year: "numeric",
				month: "long",
				day: "numeric",
			})}`;
		},
	});
}
