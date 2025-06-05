"use server";
import { ArtImagePreviewRecord } from "@/app-library/content-apis/art-image-preview";
import neon from "@/app-library/third-party/apis/neon";

export const retrieveNeonRecords = async function () {
	const records = await neon()`SELECT * FROM "ArtImagePreview"`;
	return records as ArtImagePreviewRecord[];
};
