import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Orientation";
import { ImageCardModel } from "../ImageCardModel";

export interface InstantiateImageCardModelParameters {
	thumbnail: Image;
	orientation: Orientation;
}

export function instantiateImageCardModel({
	thumbnail,
	orientation,
}: InstantiateImageCardModelParameters): ImageCardModel {
	return {
		modelInstance: {
			thumbnail,
			orientation,
		},
	};
}
