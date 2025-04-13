import { ReadonlyComponentModel } from "../../ComponentModel";
import { ContentComponentModelInstance } from "../ContentComponentModel";

export interface HeaderModel extends ReadonlyComponentModel {
	readonly modelInstance: HeaderModelInstance;
}

export interface HeaderModelInstance extends ContentComponentModelInstance {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
}

export function useHeaderModel(
	id: string,
	headerTitle: string,
	headerSubtitle: string
): HeaderModel {
	return {
		modelInstance: {
			id,
			headerTitle,
			headerSubtitle,
		},
	};
}
