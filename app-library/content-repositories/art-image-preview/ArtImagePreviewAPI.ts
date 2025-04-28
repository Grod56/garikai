import { ContentRecord, ContentAPI } from "../ContentAPI";

export interface ArtImagePreviewRecord extends ContentRecord {
	title: string;
	imageSource: string;
	imageAlt: string;
	imagePlaceholder: string;
}

export type ArtImagePreviewAPI = ContentAPI<ArtImagePreviewRecord>;
