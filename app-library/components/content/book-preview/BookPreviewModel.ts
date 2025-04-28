import {
	ContentComponentModel,
	ContentComponentModelInstance,
} from "@/app-library/components/content/ContentComponentModel";
import { Image } from "@/app-library/custom-types/Image";

export type BookPreviewModel = ContentComponentModel<BookPreviewModelInstance>;

export interface BookPreviewModelInstance
	extends ContentComponentModelInstance {
	readonly title: string;
	readonly author: string;
	readonly bookLink: URL;
	readonly cover: Image;
}
