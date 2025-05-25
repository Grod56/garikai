import { ContentRecord, ContentAPI } from "./content-api";

export interface ArtImagePreviewRecord extends ContentRecord {
	title: string;
	imageSource: string;
	imageAlt: string;
	imagePlaceholder: string;
}

export type ArtImagePreviewAPI = ContentAPI<ArtImagePreviewRecord>;
