import { ContentAPI, ContentRecord } from "./content-api";

export interface PortfolioItemRecord extends ContentRecord {
	title: string;
	description: string;
	category: string;
	link: string;
	thumbnailSource: string;
	thumbnailAlt: string;
	thumbnailPlaceholder: string;
}

export type PortfolioItemAPI = ContentAPI<PortfolioItemRecord>;
