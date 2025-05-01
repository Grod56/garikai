import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { InstanceInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../../content-repositories/art-image-preview/ArtImagePreviewAPI";
import {
	ArtImagePreviewRepositoryModelInstance,
	ArtImagePreviewRepositoryModelInteraction,
} from "../../../content-repositories/art-image-preview/ArtImagePreviewRepositoryModel";
import { instantiateArtImagePreviewModel } from "@/app-library/default-implementations/model-instantiators/art-image-preview/ArtImagePreviewModelInstantiator";

export function instantiateArtImagePreviewRepositoryModel(
	api: ArtImagePreviewAPI
) {
	const instanceInteractionInterface = _instanceInteractionInterface(api);
	const model = {
		modelInstance: null as ArtImagePreviewRepositoryModelInstance,
		async interact(interaction: ArtImagePreviewRepositoryModelInteraction) {
			try {
				this.modelInstance =
					await instanceInteractionInterface.getModelInstance(
						interaction
					);
			} catch (error) {
				throw new Error(`Failed to update modelInstance`, {
					cause: error,
				});
			}
		},
		instanceInteractionInterface,
	};

	return model;
}

function _instanceInteractionInterface(
	api: ArtImagePreviewAPI
): ArtImagePreviewRepositoryInstanceInteractionInterface {
	const getModelInstance = async (
		interaction: ArtImagePreviewRepositoryModelInteraction
	): Promise<ArtImagePreviewRepositoryModelInstance> => {
		try {
			switch (interaction.interactionName) {
				case "RETRIEVE_MODELS":
					return await _retrieveArtImagePreviewRepositoryModels(api);
			}
		} catch (error) {
			throw new Error(`Failed to generate new model instance`, {
				cause: error,
			});
		}
	};
	return {
		getModelInstance,
	};
}

type ArtImagePreviewRepositoryInstanceInteractionInterface =
	InstanceInteractionInterface<
		ArtImagePreviewRepositoryModelInstance,
		ArtImagePreviewRepositoryModelInteraction
	>;

async function _retrieveArtImagePreviewRepositoryModels(
	api: ArtImagePreviewAPI
): Promise<ArtImagePreviewRepositoryModelInstance> {
	try {
		const records = await api.retrieveRecords();
		const retrievedModels: ArtImagePreviewModel[] = records.map(
			(record: ArtImagePreviewRecord) => {
				return instantiateArtImagePreviewModel({
					id: `art-image-preview_${record.id}`,
					image: {
						source: record.imageSource,
						alt: record.imageAlt,
						placeholder:
							record.imagePlaceholder as ImagePlaceholder,
					},
					title: record.title,
				});
			}
		);
		return { artImagePreviewModels: retrievedModels };
	} catch (error) {
		throw new Error(`An error occurred while fetching api records`, {
			cause: error,
		});
	}
}
