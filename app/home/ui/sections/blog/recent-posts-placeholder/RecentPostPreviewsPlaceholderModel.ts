import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export enum RecentPostPreviewsPlaceholderType {
	PENDING,
}

export interface RecentPostPreviewsPlaceholderModelView {
	placeholderedRecentPostPreviewModels: PostPreviewModel[] | undefined;
}

export type RecentPostPreviewsPlaceholderModel =
	ReadonlyModel<RecentPostPreviewsPlaceholderModelView>;
