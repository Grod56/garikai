import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface FlexibleContainerModel extends ReadonlyComponentModel {
	readonly modelInstance: FlexibleContainerModelInstance;
}

export interface FlexibleContainerModelInstance
	extends WidgetComponentModelInstance {}

export function useFlexibleContainerModel(): FlexibleContainerModel {
	return { modelInstance: {} };
}
