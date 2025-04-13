import { useEffect, useState } from "react";
import supabase from "@/app/utilities/supabase";
import {
	BookPreviewModel,
	useBookPreviewModel,
} from "../components/content/book-preview/BookPreviewModel";
import { Image } from "../custom-types/Image";

export function useBookPreviewRepository() {
	const [bookPreviews, setBookPreviews] = useState<BookPreviewModel[]>();

	async function retrieveAll(): Promise<BookPreviewModel[]> {
		try {
			const { data } = await supabase
				.from("BookPreviewView")
				.select("*")
				.order("title");
			if (data) {
				return data.map((record) => {
					const bookPreviewModel = useBookPreviewModel(
						`book-preview_${record.id}`,
						record.title,
						record.author,
						record.bookSourceURL,
						{
							source: record.coverSource,
							alt: record.coverAlt,
							placeholder: record.coverPlaceholder,
						} as Image
					);
					return bookPreviewModel;
				});
			}
			throw new Error(
				"Supabase query returned a null value I don't yet know wtf means"
			);
		} catch (error) {
			throw new Error(`Failed to fetch Book Preview data. ${error}`);
		}
	}

	useEffect(() => {
		retrieveAll().then((bookPreviews) => setBookPreviews(bookPreviews));
	}, []);

	return bookPreviews;
}
