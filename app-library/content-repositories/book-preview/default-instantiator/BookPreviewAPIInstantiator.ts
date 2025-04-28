import supabase from "@/external-apis/supabase";
import { BookPreviewAPI, BookPreviewRecord } from "../BookPreviewAPI";

export function getSupabaseBookPreviewAPI(): BookPreviewAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await supabase
				.from("BookPreviewView")
				.select("*")
				.order("title");
			if (data) {
				const records = data.map(
					(item) =>
						({
							id: item.id,
							title: item.title,
							author: item.author,
							bookLink: item.bookLink,
							coverSource: item.coverSource,
							coverAlt: item.coverAlt,
							coverPlaceholder: item.coverPlaceholder,
						}) as BookPreviewRecord
				);
				return records;
			}
			throw new Error("Supabase returned an error on request");
		},
	};
}
