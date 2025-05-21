import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface BookPreviewsPlaceholderModelView {
	bookPreviewModels: BookPreviewModel[] | undefined;
}

export type BookPreviewsPlaceholderModel =
	ReadonlyModel<BookPreviewsPlaceholderModelView>;
