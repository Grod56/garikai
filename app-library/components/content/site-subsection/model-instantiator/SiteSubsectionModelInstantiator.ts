import { SiteSubsectionModel } from "../SiteSubsectionModel";

export interface InstantiateSiteSubsectionModelParameters {
	id: string;
	subsectionTitle: string;
}

export function instantiateSiteSubsectionModel({
	id,
	subsectionTitle,
}: InstantiateSiteSubsectionModelParameters): SiteSubsectionModel {
	return {
		modelInstance: {
			id,
			subsectionTitle,
		},
	};
}
