import { Image } from "@/app-library/utility-types/Image";
import { ContentComponentModelView } from "../content-component";
import { ReadonlyModel } from "@mvc-react/mvc";

export interface PortfolioItemModelView extends ContentComponentModelView {
	title: string;
	description: string;
	category: string;
	link: URL;
	thumbnail: Image;
}

export type PortfolioItemModel = ReadonlyModel<PortfolioItemModelView>;
