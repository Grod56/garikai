import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import {
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "./RepositoryModel";

export type BookPreviewRepositoryModelView = RepositoryModelView<{
	readonly bookPreviewModels: BookPreviewModel[];
}>;

export type BookPreviewRepositoryModelInteraction = RepositoryModelInteraction;

export type BookPreviewRepositoryModel = RepositoryModel<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;
