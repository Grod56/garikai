import { Orientation } from "@/app-library/utility-types/miscellaneous";
import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export type ImageCardSkeletonModel = ReadonlyModel<ImageCardSkeletonModelView>;

export interface ImageCardSkeletonModelView extends WidgetComponentModelView {
	readonly orientation: Orientation;
}
