import {
	ContentComponentModel,
	ContentComponentModelView,
} from "@/app-library/components/content/ContentComponentModel";
import { Image } from "@/app-library/custom-types/Image";

export type BookPreviewModel = ContentComponentModel<BookPreviewModelView>;

export interface BookPreviewModelView extends ContentComponentModelView {
	readonly title: string;
	readonly author: string;
	readonly bookLink: URL;
	readonly cover: Image;
}
