import { Orientation } from "@/app-library/custom-types/Orientation";
import { ImageCardSkeletonModel } from "../ImageCardSkeletonModel";

export interface InstantiateImageCardSkeletonModelParameters {
	orientation: Orientation;
}

export function instantiateImageCardSkeletonModel({
	orientation,
}: InstantiateImageCardSkeletonModelParameters): ImageCardSkeletonModel {
	return {
		modelInstance: {
			orientation,
		},
	};
}
