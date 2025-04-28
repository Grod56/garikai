import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "@/app-library/components/content/ContentComponentModel";

export type SiteSubsectionModel =
	ContentComponentModel<SiteSubsectionModelInstance>;

export interface SiteSubsectionModelInstance
	extends ContentComponentModelInstance {
	readonly subsectionTitle: string;
}
