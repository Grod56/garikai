import { GridContainerModel, Orientation } from "../GridContainerModel";

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
		modelInstance: {
			maxXorY,
			orientation,
			overflow,
		},
	};
}
