import { PostPreviewModel } from "@/app-library/components/content/post-preview/post-preview";
import { ReadonlyModel } from "@mvc-react/mvc";

export enum RecentPostPreviewsPlaceholderType {
	PENDING,
}

export interface RecentPostPreviewsPlaceholderModelView {
	recentPostPreviewModels: PostPreviewModel[] | undefined;
}

export type RecentPostPreviewsPlaceholderModel =
	ReadonlyModel<RecentPostPreviewsPlaceholderModelView>;
