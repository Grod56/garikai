import { ContentComponentModelInstance } from "@/app/components/content/ContentComponentModel";
import { ReadonlyComponentModel } from "../../ComponentModel";

export interface SiteSectionModel extends ReadonlyComponentModel {
	readonly modelInstance: SiteSectionModelInstance;
}

export interface SiteSectionModelInstance
	extends ContentComponentModelInstance {
	readonly sectionName: string;
	readonly sectionTitle: string;
}

export function useSiteSectionModel(
	id: string,
	sectionName: string,
	sectionTitle: string
): SiteSectionModel {
	return {
		modelInstance: {
			id,
			sectionName,
			sectionTitle,
		} as SiteSectionModelInstance,
	};
}
