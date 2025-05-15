import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Miscellaneous";
import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type ImageCardModel = WidgetComponentModel<ImageCardModelView>;

export interface ImageCardModelView extends WidgetComponentModelView {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
}
