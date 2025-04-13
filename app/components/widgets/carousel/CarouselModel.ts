import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface CarouselModel extends ReadonlyComponentModel {
	readonly modelInstance: CarouselModelInstance;
}

export interface CarouselModelInstance extends WidgetComponentModelInstance {}

export function useCarouselModel(): CarouselModel {
	return { modelInstance: {} };
}
