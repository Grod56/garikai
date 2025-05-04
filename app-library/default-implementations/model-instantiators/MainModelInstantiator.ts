import {
	MainModel,
	MainModelView,
} from "../../components/content/main/MainModel";

export interface InstantiateMainModelParameters {
	id: string;
	name: string;
}

export function instantiateMainModel({
	id,
	name,
}: InstantiateMainModelParameters): MainModel {
	return {
		modelView: {
			id,
			name,
		} as MainModelView,
	};
}
