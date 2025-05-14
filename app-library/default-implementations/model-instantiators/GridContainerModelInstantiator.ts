import {
	GridContainerModel,
	Orientation,
} from "../../components/widget/grid-container/GridContainerModel";

export interface InstantiateGridContainerModelParameters {
	maxXorY: number;
	orientation: Orientation;
	overflow: boolean;
}

export function instantiateGridContainerModel({
	maxXorY,
	orientation,
	overflow,
}: InstantiateGridContainerModelParameters): GridContainerModel {
	return {
		modelView: {
			maxXorY,
			orientation,
			overflow,
		},
	};
}
