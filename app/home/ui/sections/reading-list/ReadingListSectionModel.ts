import { BookPreviewRepositoryModel } from "@/app-library/content-repositories/BookPreviewRepositoryModel";
import { SectionModelView } from "../SectionModel";
import { Model } from "@/app-library/custom-types/model/Model";

export interface ReadingListSectionModelView extends SectionModelView {
	bookPreviewRepositoryModel: BookPreviewRepositoryModel;
}

export type ReadingListSectionModel = Model<ReadingListSectionModelView>;
