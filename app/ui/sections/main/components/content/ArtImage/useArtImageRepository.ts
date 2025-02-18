import { useEffect, useState } from "react";
import { ArtImageModel } from "./ArtImageModel";
import supabase from "@/app/utilities/supabase";


export function useArtImageRepository() {

    const [artImages, setArtImages] = useState<ArtImageModel[]>()

    async function retrieveAll(): Promise<ArtImageModel[]> {
        try {
            const { data } = await supabase.from('ArtImage').select('*')
            if (data) {
                return data.map((record) => new ArtImageModel({
                    id: record.id,
                    imageTitle: record.title,
                    imageSourceURL: record.sourceURL
                }));
            }
            throw new Error("Supabase query returned a null value I don't yet know wtf means")
        } catch(error) {
            throw new Error(`Failed to fetch Art Image data. ${error}`);
        }
    }

    useEffect(() => {
        retrieveAll().then((artImageModels) => setArtImages(artImageModels));
    }, [])

    return artImages;
    
}