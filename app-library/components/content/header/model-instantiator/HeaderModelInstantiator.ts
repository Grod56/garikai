import { HeaderModel } from "../HeaderModel";

export interface InstantiateHeaderModelParameters {
	id: string;
	headerTitle: string;
	headerSubtitle: string;
}

export function instantiateHeaderModel({
	id,
	headerTitle,
	headerSubtitle,
}: InstantiateHeaderModelParameters): HeaderModel {
	return {
		modelInstance: {
			id,
			headerTitle,
			headerSubtitle,
		},
	};
}
