import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { instantiateBookPreviewModel } from "@/app-library/default-implementations/model-instantiators/BookPreviewModelInstantiator";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { ViewInteractionInterface } from "@/app-library/custom-types/model/StatifiableModel";
import {
	BookPreviewAPI,
	BookPreviewRecord,
} from "../../content-apis/BookPreviewAPI";
import {
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction,
} from "../../content-repositories/BookPreviewRepositoryModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

export function instantiateBookPreviewRepositoryModel(api: BookPreviewAPI) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model = {
		modelView: null as BookPreviewRepositoryModelView,
		async interact(interaction: BookPreviewRepositoryModelInteraction) {
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

type BookPreviewRepositoryViewInteractionInterface = ViewInteractionInterface<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;

async function _retrieveBookPreviewRepositoryModels(
	api: BookPreviewAPI
): Promise<BookPreviewRepositoryModelView> {
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
			cause: new Error(String(error)),
		});
	}
}

function _viewInteractionInterface(
	api: BookPreviewAPI
): BookPreviewRepositoryViewInteractionInterface {
	const getModelView = async (
		interaction: BookPreviewRepositoryModelInteraction
	): Promise<BookPreviewRepositoryModelView> => {
		try {
			switch (interaction.type) {
				case RepositoryInteractionType.RETRIEVE:
					return await _retrieveBookPreviewRepositoryModels(api);
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
