import { FeaturedPostPreviewModel } from "../../components/content/post-preview/FeaturedPostPreviewModel";
import {
	newPostPreviewModel,
	InstantiatePostPreviewModelParameters,
} from "./PostPreviewModelInstantiator";

export interface InstantiateFeaturedPostPreviewModelParameters
	extends InstantiatePostPreviewModelParameters {
	snippet: string;
}

export function newFeaturedPostPreviewModel(
	parameters: InstantiateFeaturedPostPreviewModelParameters
): FeaturedPostPreviewModel {
	const postPreviewModel = newPostPreviewModel({ ...parameters });
	return {
		modelView: {
			...postPreviewModel.modelView!,
			snippet: parameters.snippet,
		},
	};
}
