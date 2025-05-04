import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import {
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "./RepositoryModel";
import { FeaturedPostPreviewModel } from "@/app-library/components/content/post-preview/FeaturedPostPreviewModel";

export type PostPreviewRepositoryModelView = RepositoryModelView<{
	readonly recentPostPreviewModels: PostPreviewModel[];
	readonly featuredPostPreviewModel: FeaturedPostPreviewModel;
}>;

export type PostPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type PostPreviewRepositoryModel = RepositoryModel<
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction
>;
