import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface ArtImageSkeletonModel extends ReadonlyComponentModel {
	readonly modelInstance: ArtImageSkeletonModelInstance;
}

export interface ArtImageSkeletonModelInstance
	extends WidgetComponentModelInstance {}

export function useArtImageSkeletonModel(): ArtImageSkeletonModel {
	return { modelInstance: {} };
}
