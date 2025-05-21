import { Image } from "@/app-library/custom-types/Image";
import { Orientation } from "@/app-library/custom-types/Miscellaneous";
import { ReadonlyModel } from "@mvc-react/mvc";
import { WidgetComponentModelView } from "../widget-component";

export type ImageCardModel = ReadonlyModel<ImageCardModelView>;

export interface ImageCardModelView extends WidgetComponentModelView {
	readonly thumbnail: Image;
	readonly orientation: Orientation;
}
