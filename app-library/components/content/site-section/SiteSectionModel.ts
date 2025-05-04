import {
	ContentComponentModel,
	ContentComponentModelView,
} from "@/app-library/components/content/ContentComponentModel";

export type SiteSectionModel = ContentComponentModel<SiteSectionModelView>;

export interface SiteSectionModelView extends ContentComponentModelView {
	readonly sectionName: string;
	readonly sectionTitle: string;
}
