import { PostPreviewAPI } from "@/app-library/content-apis/PostPreviewAPI";
import { SectionModelView } from "../SectionModel";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface BlogSectionModelView extends SectionModelView {
	postPreviewAPI: PostPreviewAPI;
	blogURL: URL;
}

export type BlogSectionModel = ReadonlyModel<BlogSectionModelView>;
