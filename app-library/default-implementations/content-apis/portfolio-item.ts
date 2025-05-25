import {
	PortfolioItemAPI,
	PortfolioItemRecord,
} from "@/app-library/content-apis/portfolio-item";
import supabase from "@/app-library/third-party/apis/supabase";

// TODO: Un-DRY in the future
export function newSupabasePortfolioItemAPI(): PortfolioItemAPI {
	return {
		retrieveRecords: async () => {
			const { data } = await supabase.from("PortfolioItem").select("*");
			if (data) {
				const records = data.map(
					(item) =>
						({
							id: item.id,
							title: item.title,
							description: item.description,
							category: item.category,
							link: item.link,
							thumbnailSource: item.thumbnailSource,
							thumbnailAlt: item.thumbnailAlt,
							thumbnailPlaceholder: item.thumbnailPlaceholder,
						}) as PortfolioItemRecord
				);
				return records;
			}
			throw new Error("Supabase returned an error on request");
		},
	};
}
