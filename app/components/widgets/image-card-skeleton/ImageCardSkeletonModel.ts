import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface ImageCardSkeletonModel extends ReadonlyComponentModel {
	readonly modelInstance: ImageCardSkeletonModelInstance;
}

export interface ImageCardSkeletonModelInstance
	extends WidgetComponentModelInstance {
	readonly orientation: Orientation;
}

export function useImageCardSkeletonModel(
	orientation: Orientation
): ImageCardSkeletonModel {
	return { modelInstance: { orientation } };
}
