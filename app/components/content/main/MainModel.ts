import { ReadonlyComponentModel } from "../../ComponentModel";
import { ContentComponentModelInstance } from "../ContentComponentModel";

export interface MainModel extends ReadonlyComponentModel {
	readonly modelInstance: MainModelInstance;
}

export interface MainModelInstance extends ContentComponentModelInstance {
	readonly name: string;
}

export function useMainModel(id: string, name: string): MainModel {
	return {
		modelInstance: {
			id,
			name,
		} as MainModelInstance,
	};
}
