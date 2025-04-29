import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Orientation";
import { WidgetComponentModel } from "../WidgetComponentModel";

export type ImageCardModel = WidgetComponentModel<ImageCardModelInstance>;

export interface ImageCardModelInstance {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
}
