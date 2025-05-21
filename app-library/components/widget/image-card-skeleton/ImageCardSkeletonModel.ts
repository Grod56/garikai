import { Orientation } from "@/app-library/custom-types/Miscellaneous";
import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export type ImageCardSkeletonModel = ReadonlyModel<ImageCardSkeletonModelView>;

export interface ImageCardSkeletonModelView extends WidgetComponentModelView {
	readonly orientation: Orientation;
}
