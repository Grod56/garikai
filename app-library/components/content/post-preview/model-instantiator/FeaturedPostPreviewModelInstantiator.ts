import { FeaturedPostPreviewModel } from "../FeaturedPostPreviewModel";
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
		modelInstance: {
			...postPreviewModel.modelInstance,
			snippet: parameters.snippet,
		},
	};
}
