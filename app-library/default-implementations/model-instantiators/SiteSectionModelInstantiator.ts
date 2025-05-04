import {
	SiteSectionModel,
	SiteSectionModelView,
} from "../../components/content/site-section/SiteSectionModel";

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
		modelView: {
			id,
			sectionName,
			sectionTitle,
		} as SiteSectionModelView,
	};
}
