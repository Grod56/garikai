import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { ViewInteractionInterface } from "@/app-library/custom-types/model/StatifiableModel";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import {
	ArtImagePreviewAPI,
	ArtImagePreviewRecord,
} from "../../content-apis/ArtImagePreviewAPI";
import {
	ArtImagePreviewRepositoryModelInteraction,
	ArtImagePreviewRepositoryModelView,
} from "../../content-repositories/ArtImagePreviewRepositoryModel";

export function instantiateArtImagePreviewRepositoryModel(
	api: ArtImagePreviewAPI
) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model = {
		modelView: null as ArtImagePreviewRepositoryModelView,
		async interact(interaction: ArtImagePreviewRepositoryModelInteraction) {
			try {
				this.modelView =
					await viewInteractionInterface.getModelView(interaction);
			} catch (error) {
				throw new Error(`Failed to update modelView`, {
					cause: new Error(String(error)),
				});
			}
		},
		viewInteractionInterface,
	};

	return model;
}

function _viewInteractionInterface(
	api: ArtImagePreviewAPI
): ArtImagePreviewRepositoryViewInteractionInterface {
	const getModelView = async (
		interaction: ArtImagePreviewRepositoryModelInteraction
	): Promise<ArtImagePreviewRepositoryModelView> => {
		try {
			switch (interaction.type) {
				case RepositoryInteractionType.RETRIEVE:
					return await _retrieveArtImagePreviewRepositoryModels(api);
			}
		} catch (error) {
			throw new Error(`Failed to generate new model view`, {
				cause: new Error(String(error)),
			});
		}
	};
	return {
		getModelView,
	};
}

type ArtImagePreviewRepositoryViewInteractionInterface =
	ViewInteractionInterface<
		ArtImagePreviewRepositoryModelView,
		ArtImagePreviewRepositoryModelInteraction
	>;

async function _retrieveArtImagePreviewRepositoryModels(
	api: ArtImagePreviewAPI
): Promise<ArtImagePreviewRepositoryModelView> {
	try {
		const records = await api.retrieveRecords();
		const retrievedModels: ArtImagePreviewModel[] = records.map(
			(record: ArtImagePreviewRecord) => {
				return instantiateReadonlyModel({
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
			cause: new Error(String(error)),
		});
	}
}
