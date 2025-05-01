import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Orientation";
import {
	WidgetComponentModel,
	WidgetComponentModelInstance,
} from "../WidgetComponentModel";

export type ImageCardModel = WidgetComponentModel<ImageCardModelInstance>;

export interface ImageCardModelInstance extends WidgetComponentModelInstance {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
}
