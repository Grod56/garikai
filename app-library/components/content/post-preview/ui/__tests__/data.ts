import { FeaturedPostPreviewModel } from "../../FeaturedPostPreviewModel";
import { PostPreviewModel } from "../../PostPreviewModel";

export const postPreviewModelTestObject: PostPreviewModel = {
	modelInstance: {
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

export const feauturedPostPreviewModelTestObject: FeaturedPostPreviewModel = {
	modelInstance: {
		...postPreviewModelTestObject.modelInstance,
		snippet: "This is a snippet",
	},
};
