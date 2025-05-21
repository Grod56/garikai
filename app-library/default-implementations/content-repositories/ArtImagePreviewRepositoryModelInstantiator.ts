import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../content-apis/ArtImagePreviewAPI";
import {
	ArtImagePreviewRepositoryModel,
	ArtImagePreviewRepositoryModelInteraction,
	ArtImagePreviewRepositoryModelView,
} from "../../content-repositories/ArtImagePreviewRepositoryModel";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "@mvc-react/stateful";
import { newReadonlyModel } from "@mvc-react/mvc";

export function instantiateArtImagePreviewRepositoryModel(
	api: ArtImagePreviewAPI
) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model: ArtImagePreviewRepositoryModel &
		StatifiableModel<ArtImagePreviewRepositoryViewInteractionInterface> = {
		modelView: null,
		interact(interaction: ArtImagePreviewRepositoryModelInteraction) {
			viewInteractionInterface
				.produceModelView(interaction)
				.then((newModelView) => (this.modelView = newModelView))
				.catch((error) => {
					console.error(`Failed to update modelView: ${error}`);
				});
		},
		viewInteractionInterface,
	};

	return model;
}

function _viewInteractionInterface(
	api: ArtImagePreviewAPI
): ArtImagePreviewRepositoryViewInteractionInterface {
	//TODO: won't async for the sake of preserving Error type for now
	async function produceModelView(
		interaction: ArtImagePreviewRepositoryModelInteraction
	): Promise<ArtImagePreviewRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return await _retrieveArtImagePreviewRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}

type ArtImagePreviewRepositoryViewInteractionInterface =
	ViewInteractionInterface<
		ArtImagePreviewRepositoryModelView,
		ArtImagePreviewRepositoryModelInteraction
	>;

async function _retrieveArtImagePreviewRepositorySnapshot(
	api: ArtImagePreviewAPI
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
		}
	);
	return { artImagePreviewModels: retrievedModels };
}
