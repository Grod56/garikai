import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";

export interface BookPreviewsPlaceholderModelView {
	bookPreviewModels: BookPreviewModel[] | undefined;
}

export type BookPreviewsPlaceholderModel =
	ReadonlyModel<BookPreviewsPlaceholderModelView>;
