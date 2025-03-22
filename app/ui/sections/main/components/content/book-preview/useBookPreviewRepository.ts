import { useEffect, useState } from "react";
import supabase from "@/app/utilities/supabase";
import {
	BookPreviewModelInstance,
	BookPreviewModelInstantiator,
} from "./BookPreviewModel";

export function useBookPreviewRepository(
	bookPreviewModelInstantiator: BookPreviewModelInstantiator
) {
	const [bookPreviews, setBookPreviews] =
		useState<BookPreviewModelInstance[]>();

	async function retrieveAll(): Promise<BookPreviewModelInstance[]> {
		try {
			const { data } = await supabase
				.from("BookPreview")
				.select("*")
				.order("title");
			if (data) {
				return data.map((record) =>
					bookPreviewModelInstantiator.instantiate({
						id: record.id,
						thumbnail: record.thumbnailSourceURL,
						title: record.title,
						author: record.author,
						link: new URL(record.bookSourceURL),
					})
				);
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
