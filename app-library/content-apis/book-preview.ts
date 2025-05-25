import { ContentRecord, ContentAPI } from "./content-api";

export interface BookPreviewRecord extends ContentRecord {
	title: string;
	author: string;
	bookLink: string;
	coverSource: string;
	coverAlt: string;
	coverPlaceholder: string;
}

export type BookPreviewAPI = ContentAPI<BookPreviewRecord>;
