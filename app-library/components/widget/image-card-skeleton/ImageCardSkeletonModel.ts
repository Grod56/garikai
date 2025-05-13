import { Orientation } from "@/app-library/custom-types/Orientation";
import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type ImageCardSkeletonModel =
	WidgetComponentModel<ImageCardSkeletonModelView>;

export interface ImageCardSkeletonModelView extends WidgetComponentModelView {
	readonly orientation: Orientation;
}
