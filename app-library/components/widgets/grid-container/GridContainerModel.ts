import { WidgetComponentModel } from "../WidgetComponentModel";

export type Orientation = "horizontal" | "vertical";

export type GridContainerModel =
	WidgetComponentModel<GridContainerModelInstance>;

export interface GridContainerModelInstance {
	readonly maxXorY: number;
	readonly orientation: Orientation;
	readonly overflow: boolean;
}
