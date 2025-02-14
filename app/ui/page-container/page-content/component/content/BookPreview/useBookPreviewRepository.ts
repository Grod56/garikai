import { useEffect, useState } from "react";
import { BookPreviewModel } from "./BookPreviewModel";
import supabase from "@/app/utility/supabase";


export function useBookPreviewRepository() {

    const [bookPreviews, setBookPreviews] = useState<BookPreviewModel[]>()

    async function retrieveAll(): Promise<BookPreviewModel[]> {
        try {
            
            const { data } = await supabase.from('BookPreview').select("*").order("title")
            if (data) {
                return data.map((record) => new BookPreviewModel({
                    id: record.id,
                    title: record.title,
                    author: record.author,
                    thumbnailSourceURL: record.thumbnailSourceURL,
                    bookSourceURL: new URL(record.bookSourceURL)
                }));
            }
            throw new Error("Supabase query returned a null value I don't yet know wtf means")
        } catch(error) {
            throw new Error(`Failed to fetch Book Preview data. ${error}`);
        }
    }

    useEffect(() => {
        retrieveAll().then((bookPreviews) => setBookPreviews(bookPreviews));
    }, [])

    return bookPreviews
    
}