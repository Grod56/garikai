import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { RepositoryModel, RepositoryModelInteraction } from "./RepositoryModel";

export interface BookPreviewRepositoryModelView {
	readonly bookPreviewModels: BookPreviewModel[];
}

export type BookPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type BookPreviewRepositoryModel = RepositoryModel<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;
