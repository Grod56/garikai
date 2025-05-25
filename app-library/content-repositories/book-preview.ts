import { BookPreviewModel } from "@/app-library/components/content/book-preview/book-preview";
import { RepositoryModel, RepositoryModelInteraction } from "./repository";

export interface BookPreviewRepositoryModelView {
	readonly bookPreviewModels: BookPreviewModel[];
}

export type BookPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type BookPreviewRepositoryModel = RepositoryModel<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;
