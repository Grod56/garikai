import { Orientation } from "@/app-library/custom-types/Orientation";
import { ImageCardSkeletonModel } from "../../../components/widgets/image-card-skeleton/ImageCardSkeletonModel";

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
