import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../content-apis/ArtImagePreviewAPI";
import supabase from "@/app-library/third-party/apis/supabase";

export function newSupabaseArtImagePreviewAPI(): ArtImagePreviewAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await supabase
				.from("ArtImagePreviewView")
				.select("*");
			if (data) {
				const records = data.map(
					(item) =>
						({
							id: item.id,
							title: item.title,
							imageSource: item.imageSource,
							imageAlt: item.imageAlt,
							imagePlaceholder: item.imagePlaceholder,
						}) as ArtImagePreviewRecord
				);
				return records;
			}
			throw new Error("Supabase returned null on request");
		},
	};
}
