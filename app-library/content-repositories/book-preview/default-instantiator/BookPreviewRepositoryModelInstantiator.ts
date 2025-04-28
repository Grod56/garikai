import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { instantiateBookPreviewModel } from "@/app-library/components/content/book-preview/model-instantiator/BookPreviewModelInstantiator";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { InstanceInteractionInterface } from "@/app-library/custom-types/model/MemoizableModel";
import { BookPreviewAPI, BookPreviewRecord } from "../BookPreviewAPI";
import {
	BookPreviewRepositoryModelInstance,
	BookPreviewRepositoryModelInteraction,
} from "../BookPreviewRepositoryModel";

export function instantiateBookPreviewRepository(api: BookPreviewAPI) {
	const instanceInteractionInterface = _instanceInteractionInterface(api);
	const model = {
		modelInstance: null as BookPreviewRepositoryModelInstance,
		async interact(interaction: BookPreviewRepositoryModelInteraction) {
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

type BookPreviewRepositoryInstanceInteractionInterface =
	InstanceInteractionInterface<
		BookPreviewRepositoryModelInstance,
		BookPreviewRepositoryModelInteraction
	>;

async function _retrieveBookPreviewRepositoryModels(
	api: BookPreviewAPI
): Promise<BookPreviewRepositoryModelInstance> {
	try {
		const records = await api.retrieveRecords();
		const retrievedModels: BookPreviewModel[] = records.map(
			(record: BookPreviewRecord) => {
				return instantiateBookPreviewModel({
					id: `book-preview_${record.id}`,
					title: record.title,
					author: record.author,
					bookLink: new URL(record.bookLink),
					cover: {
						source: record.coverSource,
						alt: record.coverAlt,
						placeholder:
							record.coverPlaceholder as ImagePlaceholder,
					},
				});
			}
		);
		return { bookPreviewModels: retrievedModels };
	} catch (error) {
		throw new Error(`An error occurred while fetching api records`, {
			cause: error,
		});
	}
}

function _instanceInteractionInterface(
	api: BookPreviewAPI
): BookPreviewRepositoryInstanceInteractionInterface {
	const getModelInstance = async (
		interaction: BookPreviewRepositoryModelInteraction
	): Promise<BookPreviewRepositoryModelInstance> => {
		try {
			switch (interaction.interactionName) {
				case "RETRIEVE_MODELS":
					return await _retrieveBookPreviewRepositoryModels(api);
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
