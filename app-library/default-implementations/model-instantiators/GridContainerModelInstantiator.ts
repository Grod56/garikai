import {
	GridContainerModel,
	Orientation,
} from "../../components/widget/grid-container/GridContainerModel";

export interface InstantiateGridContainerModelParameters {
	maxXorY: 2 | 3; //TODO: Not ideal
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
