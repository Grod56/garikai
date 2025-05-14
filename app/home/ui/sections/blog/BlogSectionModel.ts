import { PostPreviewAPI } from "@/app-library/content-apis/PostPreviewAPI";
import { Model } from "@/app-library/custom-types/model/Model";
import { SectionModelView } from "../SectionModel";

export interface BlogSectionModelView extends SectionModelView {
	postPreviewAPI: PostPreviewAPI;
	blogURL: URL;
}

export type BlogSectionModel = Model<BlogSectionModelView>;
