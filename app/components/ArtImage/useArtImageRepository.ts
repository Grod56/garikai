import { useEffect, useState } from "react";
import { ArtImageModel } from "./ArtImageModel";
import { createPool } from "@vercel/postgres";

export function useArtImageRepository() {

    const [artImages, setArtImages] = useState<ArtImageModel[]>()

    async function retrieveAll(): Promise<ArtImageModel[]> {
        try {
            const pool = createPool({connectionString: process.env.NEXT_PUBLIC_POSTGRES_URL});
            const data = await pool.query<ArtImageModel>('SELECT * FROM ArtImage').then(
                (results) => results.rows
            );
            return data;
        } catch(error) {
            throw new Error(`Failed to fetch Art Image data. ${error}`);
        }
    }

    useEffect(() => {
        retrieveAll().then((artImageModels) => setArtImages(artImageModels));
    }, [])

    return artImages;
    
}