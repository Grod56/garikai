import { DAO } from "@/app/transcomponents/DAO";
import { BookPreviewModel } from "./BookPreviewModel";
import { sql } from "@vercel/postgres";

export class BookPreviewDAO implements DAO<BookPreviewModel> {

    async retrieveAll(): Promise<BookPreviewModel[]> {
        try {
            const data = await sql<BookPreviewModel>`SELECT * FROM BookPreview`; 
            return data.rows;
        } catch(error) {
            throw new Error('Failed to fetch revenue data.');
        }
    }
    
}