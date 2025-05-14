import {
	WidgetComponentModel,
	WidgetComponentModelView,
} from "../WidgetComponentModel";

export type Orientation = "horizontal" | "vertical";

export type GridContainerModel = WidgetComponentModel<GridContainerModelView>;

export interface GridContainerModelView extends WidgetComponentModelView {
	readonly maxXorY: number; //TODO: Refine
	readonly orientation: Orientation;
	readonly overflow: boolean;
}
