import { ContentComponentModelView } from "@/app-library/components/content/content-component";
import { Image } from "@/app-library/utility-types/Image";
import { ReadonlyModel } from "@mvc-react/mvc";

export type BookPreviewModel = ReadonlyModel<BookPreviewModelView>;

export interface BookPreviewModelView extends ContentComponentModelView {
	readonly title: string;
	readonly author: string;
	readonly bookLink: URL;
	readonly cover: Image;
}
