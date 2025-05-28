import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/art-image-preview-model";
import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { ImagePlaceholder } from "@/app-library/utility-types/image";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ViewInteractionInterface } from "@mvc-react/stateful";
import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../content-apis/art-image-preview";
import {
	ArtImagePreviewRepositoryModelInteraction,
	ArtImagePreviewRepositoryModelView,
} from "../../content-repositories/art-image-preview";

type ArtImagePreviewRepositoryViewInteractionInterface =
	ViewInteractionInterface<
		ArtImagePreviewRepositoryModelView,
		ArtImagePreviewRepositoryModelInteraction
	>;

export function newArtImagePreviewRepositoryVIInterface(
	api: ArtImagePreviewAPI,
): ArtImagePreviewRepositoryViewInteractionInterface {
	function produceModelView(
		interaction: ArtImagePreviewRepositoryModelInteraction,
	): Promise<ArtImagePreviewRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return _retrieveArtImagePreviewRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}

async function _retrieveArtImagePreviewRepositorySnapshot(
	api: ArtImagePreviewAPI,
): Promise<ArtImagePreviewRepositoryModelView> {
	const records = await api.retrieveRecords();
	const retrievedModels: ArtImagePreviewModel[] = records.map(
		(record: ArtImagePreviewRecord) => {
			return newReadonlyModel({
				id: `art-image-preview_${record.id}`,
				image: {
					source: record.imageSource,
					alt: record.imageAlt,
					placeholder: record.imagePlaceholder as ImagePlaceholder,
				},
				title: record.title,
			});
		},
	);
	return { artImagePreviewModels: retrievedModels };
}
