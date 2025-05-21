import { Model } from "@mvc-react/mvc";

export interface SectionModelView {
	sectionTitle: string;
}

export type SectionModel = Model<SectionModelView>;
