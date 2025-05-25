import { ContentComponentModelView } from "@/app-library/components/content/content-component";
import { ReadonlyModel } from "@mvc-react/mvc";

export type SiteSectionModel = ReadonlyModel<SiteSectionModelView>;

export interface SiteSectionModelView extends ContentComponentModelView {
	readonly sectionName: string;
	readonly sectionTitle: string;
}
