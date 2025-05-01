import { Image } from "@/app-library/custom-types/Image";
import {
	WidgetComponentModel,
	WidgetComponentModelInstance,
} from "../WidgetComponentModel";

export interface ImageModelInstance extends WidgetComponentModelInstance {
	readonly image: Image;
	readonly width: number;
	readonly height: number;
}

export type ImageModel = WidgetComponentModel<ImageModelInstance>;
