import { FeaturedPostPreviewModel } from "../../components/content/post-preview/FeaturedPostPreviewModel";
import {
	instantiatePostPreviewModel,
	InstantiatePostPreviewModelParameters,
} from "./PostPreviewModelInstantiator";

export interface InstantiateFeaturedPostPreviewModelParameters
	extends InstantiatePostPreviewModelParameters {
	snippet: string;
}

export function instantiateFeaturedPostPreviewModel(
	parameters: InstantiateFeaturedPostPreviewModelParameters
): FeaturedPostPreviewModel {
	const postPreviewModel = instantiatePostPreviewModel({ ...parameters });
	return {
		modelView: {
			...postPreviewModel.modelView!,
			snippet: parameters.snippet,
		},
	};
}
