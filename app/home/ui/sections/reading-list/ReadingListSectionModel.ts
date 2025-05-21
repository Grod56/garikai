import { BookPreviewAPI } from "@/app-library/content-apis/BookPreviewAPI";
import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../SectionModel";

export interface ReadingListSectionModelView extends SectionModelView {
	bookPreviewAPI: BookPreviewAPI;
}

export type ReadingListSectionModel =
	ReadonlyModel<ReadingListSectionModelView>;
