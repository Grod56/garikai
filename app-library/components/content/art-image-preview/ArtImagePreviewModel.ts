import { ContentComponentModelView } from "@/app-library/components/content/content-component";
import { Image } from "@/app-library/custom-types/Image";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface ArtImagePreviewModelView extends ContentComponentModelView {
	readonly image: Image;
	readonly title: string;
}

export type ArtImagePreviewModel = ReadonlyModel<ArtImagePreviewModelView>;
