import supabase from "@/app-library/third-party/apis/supabase";
import {
	BookPreviewAPI,
	BookPreviewRecord,
} from "../../content-apis/book-preview";

export function newSupabaseBookPreviewAPI(): BookPreviewAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await supabase
				.from("BookPreview")
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
