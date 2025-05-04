import { ContentRecord, ContentAPI } from "./ContentAPI";

export interface PostPreviewRecord extends ContentRecord {
	title: string;
	snippet: string;
	author: string;
	publishedDate: string;
	postLink: string;
	thumbnailSource: string;
}

export type PostPreviewAPI = ContentAPI<PostPreviewRecord>;
