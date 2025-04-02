import { useEffect, useState } from "react";
import supabase from "@/app/utilities/supabase";
import artImageModelInstantiator, {
	ArtImageModelInstance,
} from "../components/corporeal/widgets/art-image/ArtImageModel";

export function useArtImageRepository() {
	const [artImages, setArtImages] = useState<ArtImageModelInstance[]>();

	async function retrieveAll(): Promise<ArtImageModelInstance[]> {
		try {
			const { data } = await supabase.from("ArtImageView").select("*");
			if (data) {
				return data.map((record) => {
					return artImageModelInstantiator.instantiate({
						id: record.id,
						image: {
							source: record.source,
							alt: record.alt,
							placeholder: record.placeholder,
						},
						title: record.title,
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
