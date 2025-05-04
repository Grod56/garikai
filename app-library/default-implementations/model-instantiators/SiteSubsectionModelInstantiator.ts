import { SiteSubsectionModel } from "../../components/content/site-subsection/SiteSubsectionModel";

export interface InstantiateSiteSubsectionModelParameters {
	id: string;
	subsectionTitle: string;
}

export function instantiateSiteSubsectionModel({
	id,
	subsectionTitle,
}: InstantiateSiteSubsectionModelParameters): SiteSubsectionModel {
	return {
		modelView: {
			id,
			subsectionTitle,
		},
	};
}
