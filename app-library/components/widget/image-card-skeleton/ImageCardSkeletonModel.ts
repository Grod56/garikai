import { Orientation } from "@/app-library/custom-types/Miscellaneous";
import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type ImageCardSkeletonModel =
	WidgetComponentModel<ImageCardSkeletonModelView>;

export interface ImageCardSkeletonModelView extends WidgetComponentModelView {
	readonly orientation: Orientation;
}
