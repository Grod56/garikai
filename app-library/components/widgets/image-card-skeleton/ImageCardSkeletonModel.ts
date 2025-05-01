import { Orientation } from "@/app-library/custom-types/Orientation";
import {
	WidgetComponentModel,
	WidgetComponentModelInstance,
} from "../WidgetComponentModel";

export type ImageCardSkeletonModel =
	WidgetComponentModel<ImageCardSkeletonModelInstance>;

export interface ImageCardSkeletonModelInstance
	extends WidgetComponentModelInstance {
	readonly orientation: Orientation;
}
