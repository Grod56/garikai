import { PostPreviewRepositoryModel } from "@/app-library/content-repositories/PostPreviewRepositoryModel";
import { Model } from "@/app-library/custom-types/model/Model";
import { SectionModelView } from "../SectionModel";

export interface BlogSectionModelView extends SectionModelView {
	postPreviewRepositoryModel: PostPreviewRepositoryModel;
	blogURL: URL;
}

export type BlogSectionModel = Model<BlogSectionModelView>;
