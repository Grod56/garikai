'use client'
import { useEffect, useState } from "react";
import { BookPreviewModel } from "./BookPreviewModel";
import { createPool } from "@vercel/postgres";

export function useBookPreviewRepository() {

    const [bookPreviews, setBookPreviews] = useState<BookPreviewModel[]>()

    async function retrieveAll(): Promise<BookPreviewModel[]> {
        try {
            console.log(process.env.NEXT_PUBLIC_POSTGRES_URL);
            const pool = createPool({connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL});
            const data = await pool.query<BookPreviewModel>('SELECT * FROM BookPreview').then(
                (results) => results.rows
            );
            return data;
        } catch(error) {
            throw new Error(`Failed to fetch Book Preview data. ${error}`);
        }
    }

    useEffect(() => {
        retrieveAll().then((bookPreviews) => setBookPreviews(bookPreviews));
    }, [])

    return bookPreviews
    
}