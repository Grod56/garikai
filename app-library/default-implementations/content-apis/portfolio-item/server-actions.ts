"use server";
import { PortfolioItemRecord } from "@/app-library/content-apis/portfolio-item";
import neon from "@/app-library/third-party/apis/neon";

export const retrieveNeonRecords = async function () {
	const records = await neon()`SELECT * FROM "PortfolioItem"`;
	return records as PortfolioItemRecord[];
};
