import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../../content-apis/art-image-preview";
import supabase from "@/app-library/third-party/apis/supabase";
import { retrieveNeonRecords } from "./server-actions";

export function newNeonArtImagePreviewAPI(): ArtImagePreviewAPI {
	return {
		retrieveRecords: retrieveNeonRecords,
	};
}

export function newSupabaseArtImagePreviewAPI(): ArtImagePreviewAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await supabase.from("ArtImagePreview").select("*");
			if (data) {
				const records = data.map(
					item =>
						({
							id: item.id,
							title: item.title,
							imageSource: item.imageSource,
							imageAlt: item.imageAlt,
							imagePlaceholder: item.imagePlaceholder,
						}) as ArtImagePreviewRecord,
				);
				return records;
			}
			throw new Error("Supabase returned null on request");
		},
	};
}
