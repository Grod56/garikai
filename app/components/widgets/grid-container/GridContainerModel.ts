import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface GridContainerModel extends ReadonlyComponentModel {
	readonly modelInstance: GridContainerModelInstance;
}

export interface GridContainerModelInstance
	extends WidgetComponentModelInstance {
	readonly maxXorY: number;
	readonly orientation: Orientation;
	readonly overflow: boolean;
}

export function useGridContainerModel(
	maxXorY: number,
	orientation: Orientation,
	overflow: boolean
): GridContainerModel {
	return {
		modelInstance: {
			maxXorY,
			orientation,
			overflow,
		},
	};
}
