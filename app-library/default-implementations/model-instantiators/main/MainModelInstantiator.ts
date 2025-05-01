import {
	MainModel,
	MainModelInstance,
} from "../../../components/content/main/MainModel";

export interface InstantiateMainModelParameters {
	id: string;
	name: string;
}

export function instantiateMainModel({
	id,
	name,
}: InstantiateMainModelParameters): MainModel {
	return {
		modelInstance: {
			id,
			name,
		} as MainModelInstance,
	};
}
