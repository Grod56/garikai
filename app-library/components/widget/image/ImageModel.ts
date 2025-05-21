import { Image } from "@/app-library/custom-types/Image";
import { WidgetComponentModelView } from "../widget-component";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface ImageModelView extends WidgetComponentModelView {
	readonly image: Image;
	readonly width: number;
	readonly height: number;
}

export type ImageModel = ReadonlyModel<ImageModelView>;
