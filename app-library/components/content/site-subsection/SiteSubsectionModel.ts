import {
	ContentComponentModel,
	ContentComponentModelView,
} from "@/app-library/components/content/ContentComponentModel";

export type SiteSubsectionModel =
	ContentComponentModel<SiteSubsectionModelView>;

export interface SiteSubsectionModelView extends ContentComponentModelView {
	readonly subsectionTitle: string;
}
