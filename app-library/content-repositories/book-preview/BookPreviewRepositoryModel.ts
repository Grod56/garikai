import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import {
	ContentRepositoryModel,
	ContentRepositoryModelInteraction,
} from "../ContentRepositoryModel";

export type BookPreviewRepositoryModelInstance = {
	readonly bookPreviewModels: BookPreviewModel[];
} | null;

export type BookPreviewRepositoryModelInteraction =
	ContentRepositoryModelInteraction;

export type BookPreviewRepositoryModel = ContentRepositoryModel<
	BookPreviewRepositoryModelInstance,
	BookPreviewRepositoryModelInteraction
>;
