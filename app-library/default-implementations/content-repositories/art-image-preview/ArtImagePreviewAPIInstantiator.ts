import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../../content-repositories/art-image-preview/ArtImagePreviewAPI";
import supabase from "@/app-library/external-apis/supabase";

export function instantiateSupabaseArtImagePreviewAPI(): ArtImagePreviewAPI {
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
			throw new Error("supabase returned null on request");
		},
	};
}
