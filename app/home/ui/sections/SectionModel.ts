import { Model } from "@/app-library/custom-types/model/Model";

export interface SectionModelView {
	sectionTitle: string;
}

export type SectionModel = Model<SectionModelView>;
