import { useEffect, useState } from "react";
import supabase from "@/app/utilities/supabase";
import {
	ArtImagePreviewModel,
	useArtImagePreviewModel,
} from "../components/content/art-image-preview/ArtImagePreviewModel";

export function useArtImagePreviewRepository() {
	const [artImagePreviews, setArtImagePreviews] =
		useState<ArtImagePreviewModel[]>();

	async function retrieveAll(): Promise<ArtImagePreviewModel[]> {
		try {
			const { data } = await supabase.from("ArtImageView").select("*");
			if (data) {
				return data.map((record) => {
					const artImagePreviewModel = useArtImagePreviewModel(
						`art-image-preview_${record.id}`,
						{
							source: record.source,
							alt: record.alt,
							placeholder: record.placeholder,
						},
						record.title
					);
					return artImagePreviewModel;
				});
			}
			throw new Error(
				"Supabase query returned a null value I don't yet know wtf means"
			);
		} catch (error) {
			throw new Error(`Failed to fetch Art Image Preview data. ${error}`);
		}
	}

	useEffect(() => {
		retrieveAll().then((artImagePreviewModels) =>
			setArtImagePreviews(artImagePreviewModels)
		);
	}, []);

	return artImagePreviews;
}
