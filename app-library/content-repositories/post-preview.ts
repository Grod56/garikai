import { PostPreviewModel } from "@/app-library/components/content/post-preview/post-preview";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";
import { FeaturedPostPreviewModel } from "@/app-library/components/content/post-preview/featured-post-preview";

export interface PostPreviewRepositoryModelView {
	readonly recentPostPreviewModels: PostPreviewModel[];
	readonly featuredPostPreviewModel: FeaturedPostPreviewModel;
}

export type PostPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type PostPreviewRepositoryModel = RepositoryModel<
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction
>;
