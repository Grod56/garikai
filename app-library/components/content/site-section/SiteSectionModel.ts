import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "@/app-library/components/content/ContentComponentModel";

export type SiteSectionModel = ContentComponentModel<SiteSectionModelInstance>;

export interface SiteSectionModelInstance
	extends ContentComponentModelInstance {
	readonly sectionName: string;
	readonly sectionTitle: string;
}
