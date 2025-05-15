import { Orientation } from "@/app-library/custom-types/Miscellaneous";
import { ImageCardSkeletonModel } from "../../components/widget/image-card-skeleton/ImageCardSkeletonModel";

export interface InstantiateImageCardSkeletonModelParameters {
	orientation: Orientation;
}

export function instantiateImageCardSkeletonModel({
	orientation,
}: InstantiateImageCardSkeletonModelParameters): ImageCardSkeletonModel {
	return {
		modelView: {
			orientation,
		},
	};
}
