import { useEffect, useState } from "react";
import supabase from "@/app/utilities/supabase";
import {
	ArtImageModelInstance,
	ArtImageModelInstantiator,
} from "./ArtImageModel";

export function useArtImageRepository(
	artImageModelInstantiator: ArtImageModelInstantiator
) {
	const [artImages, setArtImages] = useState<ArtImageModelInstance[]>();

	async function retrieveAll(): Promise<ArtImageModelInstance[]> {
		try {
			const { data } = await supabase.from("ArtImage").select("*");
			if (data) {
				return data.map((record) => {
					return artImageModelInstantiator.instantiate({
						id: record.id,
						imageSource: record.sourceURL,
						imageTitle: record.title,
					});
				});
			}
			throw new Error(
				"Supabase query returned a null value I don't yet know wtf means"
			);
		} catch (error) {
			throw new Error(`Failed to fetch Art Image data. ${error}`);
		}
	}

	useEffect(() => {
		retrieveAll().then((artImageModels) => setArtImages(artImageModels));
	}, []);

	return artImages;
}
