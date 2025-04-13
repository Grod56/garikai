import { Image } from "@/app/custom-types/Image";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";
import { ReadonlyComponentModel } from "../../ComponentModel";

export interface ImageCardModel extends ReadonlyComponentModel {
	readonly modelInstance: ImageCardModelInstance;
}

export interface ImageCardModelInstance extends WidgetComponentModelInstance {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
}

export function useImageCardModel(
	thumbnail: Image,
	orientation: Orientation
): ImageCardModel {
	return {
		modelInstance: {
			thumbnail,
			orientation,
		},
	};
}
