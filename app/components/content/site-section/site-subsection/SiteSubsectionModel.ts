import { ReadonlyComponentModel } from "@/app/components/ComponentModel";
import { ContentComponentModelInstance } from "@/app/components/content/ContentComponentModel";
import "./site-subsection.scss";

export interface SiteSubsectionModel extends ReadonlyComponentModel {
	readonly modelInstance: SiteSubsectionModelInstance;
}

export interface SiteSubsectionModelInstance
	extends ContentComponentModelInstance {
	readonly subsectionTitle: string;
}

export function useSiteSubsectionModel(
	id: string,
	subsectionTitle: string
): SiteSubsectionModel {
	return {
		modelInstance: {
			id,
			subsectionTitle,
		} as SiteSubsectionModelInstance,
	};
}
