import { Orientation } from "@/app-library/custom-types/Orientation";
import { WidgetComponentModel } from "../WidgetComponentModel";

export type ImageCardSkeletonModel =
	WidgetComponentModel<ImageCardSkeletonModelInstance>;

export interface ImageCardSkeletonModelInstance {
	readonly orientation: Orientation;
}
