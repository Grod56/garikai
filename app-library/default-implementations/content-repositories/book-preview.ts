import { BookPreviewModel } from "@/app-library/components/content/book-preview/book-preview-model";
import { RepositoryInteractionType } from "@/app-library/content-repositories/repository";
import { ImagePlaceholder } from "@/app-library/utility-types/image";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ViewInteractionInterface } from "@mvc-react/stateful";
import {
	BookPreviewAPI,
	BookPreviewRecord,
} from "../../content-apis/book-preview";
import {
	BookPreviewRepositoryModelInteraction,
	BookPreviewRepositoryModelView,
} from "../../content-repositories/book-preview";

type BookPreviewRepositoryViewInteractionInterface = ViewInteractionInterface<
	BookPreviewRepositoryModelView,
	BookPreviewRepositoryModelInteraction
>;

export function newBookPreviewRepositoryVIInterface(
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
