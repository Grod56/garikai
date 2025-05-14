import { BookPreviewAPI } from "@/app-library/content-apis/BookPreviewAPI";
import { Model } from "@/app-library/custom-types/model/Model";
import { SectionModelView } from "../SectionModel";

export interface ReadingListSectionModelView extends SectionModelView {
	bookPreviewAPI: BookPreviewAPI;
}

export type ReadingListSectionModel = Model<ReadingListSectionModelView>;
