import { FeaturedPostPreviewModel } from "../../featured-post-preview-model";
import { PostPreviewModel } from "../../post-preview-model";

export const postPreviewTestModel: PostPreviewModel = {
	modelView: {
		id: "postpreview_aicnasnioascid",
		thumbnail: {
			source: "/resource/test.jpg",
			alt: "This is an alt",
			placeholder: "data:image/10asa3e329240rnfnsjkdckjdsn",
		},
		title: "Test Title",
		byline: "This is a byline",
		postLink: new URL("https://localhost:2000"),
	},
};

export const featuredPostPreviewTestModel: FeaturedPostPreviewModel = {
	modelView: {
		...postPreviewTestModel.modelView!,
		snippet: "This is a snippet",
	},
};
