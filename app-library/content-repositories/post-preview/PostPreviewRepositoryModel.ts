import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import {
	ContentRepositoryModel,
	ContentRepositoryModelInteraction,
} from "../ContentRepositoryModel";
import { FeaturedPostPreviewModel } from "@/app-library/components/content/post-preview/FeaturedPostPreviewModel";

export type PostPreviewRepositoryModelInstance = {
	readonly recentPostPreviewModels: PostPreviewModel[];
	readonly featuredPostPreviewModel: FeaturedPostPreviewModel;
} | null;

export type PostPreviewRepositoryModelInteraction =
	ContentRepositoryModelInteraction;

export type PostPreviewRepositoryModel = ContentRepositoryModel<
	PostPreviewRepositoryModelInstance,
	PostPreviewRepositoryModelInteraction
>;
