import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Orientation";
import { ImageCardModel } from "../../components/widget/image-card/ImageCardModel";

export interface InstantiateImageCardModelParameters {
	thumbnail: Image;
	orientation: Orientation;
}

export function instantiateImageCardModel({
	thumbnail,
	orientation,
}: InstantiateImageCardModelParameters): ImageCardModel {
	return {
		modelView: {
			thumbnail,
			orientation,
		},
	};
}
