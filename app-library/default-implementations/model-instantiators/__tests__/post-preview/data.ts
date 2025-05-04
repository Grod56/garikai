import { InstantiatePostPreviewModelParameters } from "../../PostPreviewModelInstantiator";

export const modelInstantiatorTestInput: InstantiatePostPreviewModelParameters =
	{
		id: "postpreview_iunin2000",
		title: "Post Title",
		postLink: new URL("https://lnk.to.me"),
		author: "An author",
		publishedDate: new Date(Date.now()),
		thumbnail: {
			source: "/resources/img.jpg",
			alt: "An alt ",
			placeholder: "data:image/1029240rnfnsjkdckjdsn",
		},
	};
