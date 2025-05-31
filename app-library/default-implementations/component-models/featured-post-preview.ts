import { newReadonlyModel } from "@mvc-react/mvc";
import { FeaturedPostPreviewModel } from "../../components/content/post-preview/featured-post-preview-model";
import {
	newPostPreviewModel,
	NewPostPreviewModelParameters,
} from "./post-preview";

export interface NewFeaturedPostPreviewModelParameters
	extends NewPostPreviewModelParameters {
	snippet: string;
}

export function newFeaturedPostPreviewModel(
	parameters: NewFeaturedPostPreviewModelParameters,
): FeaturedPostPreviewModel {
	const postPreviewModel = newPostPreviewModel({ ...parameters });
	return newReadonlyModel({
		...postPreviewModel.modelView!,
		snippet: parameters.snippet,
	});
}
