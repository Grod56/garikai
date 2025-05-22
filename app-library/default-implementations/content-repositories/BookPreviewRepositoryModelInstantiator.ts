import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import {
	BookPreviewAPI,
	BookPreviewRecord,
} from "../../content-apis/BookPreviewAPI";
import {
	BookPreviewRepositoryModel,
	BookPreviewRepositoryModelInteraction,
	BookPreviewRepositoryModelView,
} from "../../content-repositories/BookPreviewRepositoryModel";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "@mvc-react/stateful";
import { newReadonlyModel } from "@mvc-react/mvc";

export function newBookPreviewRepositoryModel(api: BookPreviewAPI) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model: BookPreviewRepositoryModel &
		StatifiableModel<BookPreviewRepositoryViewInteractionInterface> = {
		modelView: null,
		interact(interaction: BookPreviewRepositoryModelInteraction) {
			viewInteractionInterface
				.produceModelView(interaction)
				.then((newModelView) => (this.modelView = newModelView))
				.catch((error) => {
					console.error(
						`Failed to update modelView: ${String(error)}`
					);
				});
		},
		viewInteractionInterface,
	};

	return model;
}

type BookPreviewRepositoryViewInteractionInterface = ViewInteractionInterface<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;

function _viewInteractionInterface(
	api: BookPreviewAPI
): BookPreviewRepositoryViewInteractionInterface {
	function produceModelView(
		interaction: BookPreviewRepositoryModelInteraction
	): Promise<BookPreviewRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return _retrieveBookPreviewRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}

async function _retrieveBookPreviewRepositorySnapshot(
	api: BookPreviewAPI
): Promise<BookPreviewRepositoryModelView> {
	const records = await api.retrieveRecords();
	const retrievedModels: BookPreviewModel[] = records.map(
		(record: BookPreviewRecord) => {
			return newReadonlyModel({
				id: `book-preview_${record.id}`,
				title: record.title,
				author: record.author,
				bookLink: new URL(record.bookLink),
				cover: {
					source: record.coverSource,
					alt: record.coverAlt,
					placeholder: record.coverPlaceholder as ImagePlaceholder,
				},
			});
		}
	);
	return { bookPreviewModels: retrievedModels };
}
