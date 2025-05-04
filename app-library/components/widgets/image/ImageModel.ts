import { Image } from "@/app-library/custom-types/Image";
import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export interface ImageModelView extends WidgetComponentModelView {
	readonly image: Image;
	readonly width: number;
	readonly height: number;
}

export type ImageModel = WidgetComponentModel<ImageModelView>;
