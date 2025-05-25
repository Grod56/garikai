import { PostPreviewAPI } from "@/app-library/content-apis/post-preview";
import { SectionModelView } from "../section";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface BlogSectionModelView extends SectionModelView {
	postPreviewAPI: PostPreviewAPI;
	blogURL: URL;
}

export type BlogSectionModel = ReadonlyModel<BlogSectionModelView>;
