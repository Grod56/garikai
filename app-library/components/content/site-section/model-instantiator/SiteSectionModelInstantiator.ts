import {
	SiteSectionModel,
	SiteSectionModelInstance,
} from "../SiteSectionModel";

export interface InstantiateSiteSectionModelParameters {
	id: string;
	sectionName: string;
	sectionTitle: string;
}

export function instantiateSiteSectionModel({
	id,
	sectionName,
	sectionTitle,
}: InstantiateSiteSectionModelParameters): SiteSectionModel {
	return {
		modelInstance: {
			id,
			sectionName,
			sectionTitle,
		} as SiteSectionModelInstance,
	};
}
