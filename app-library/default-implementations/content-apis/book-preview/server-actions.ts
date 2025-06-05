"use server";
import { BookPreviewRecord } from "@/app-library/content-apis/book-preview";
import neon from "@/app-library/third-party/apis/neon";

export const retrieveNeonRecords = async function () {
	const records = await neon`SELECT * FROM "BookPreview" ORDER BY "title"`;
	return records as BookPreviewRecord[];
};
