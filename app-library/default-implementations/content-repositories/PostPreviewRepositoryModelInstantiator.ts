import { instantiateFeaturedPostPreviewModel } from "@/app-library/default-implementations/model-instantiators/FeaturedPostPreviewModelInstantiator";
import { instantiatePostPreviewModel } from "@/app-library/default-implementations/model-instantiators/PostPreviewModelInstantiator";
import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { removeMarkup } from "@/app-library/utilities/miscelleneous";
import {
	PostPreviewAPI,
	PostPreviewRecord,
} from "../../content-apis/PostPreviewAPI";
import {
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction,
	PostPreviewRepositoryModel,
} from "../../content-repositories/PostPreviewRepositoryModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "@mvc-react/stateful";

const imagePlaceholder = process.env
	.NEXT_PUBLIC_DEFAULT_IMAGE_PLACEHOLDER! as ImagePlaceholder;

export function instantiatePostPreviewRepositoryModel(api: PostPreviewAPI) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model: PostPreviewRepositoryModel &
		StatifiableModel<PostPreviewRepositoryViewInteractionInterface> = {
		modelView: null,
		interact(interaction: PostPreviewRepositoryModelInteraction) {
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

type PostPreviewRepositoryViewInteractionInterface = ViewInteractionInterface<
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction
>;

function _viewInteractionInterface(
	api: PostPreviewAPI
): PostPreviewRepositoryViewInteractionInterface {
	function produceModelView(
		interaction: PostPreviewRepositoryModelInteraction
	): Promise<PostPreviewRepositoryModelView> {
		switch (interaction.type) {
			case RepositoryInteractionType.RETRIEVE:
				return _retrievePostPreviewRepositorySnapshot(api);
		}
	}

	return { produceModelView };
}
async function _retrievePostPreviewRepositorySnapshot(
	api: PostPreviewAPI
): Promise<PostPreviewRepositoryModelView> {
	const records = await api.retrieveRecords();
	const featuredPostPreviewRecord = records[0];
	const recentPostPreviewModels: PostPreviewModel[] = records.map(
		(record: PostPreviewRecord) => {
			return instantiatePostPreviewModel({
				id: `post-preview_${record.id}`,
				title: record.title,
				author: record.author,
				publishedDate: new Date(record.publishedDate),
				postLink: new URL(record.postLink),
				thumbnail: {
					source: record.thumbnailSource,
					alt: `${record.title} Thumbnail`,
					placeholder: imagePlaceholder,
				},
			});
		}
	);
	const featuredPostPreviewModel = instantiateFeaturedPostPreviewModel({
		id: `featured-post-preview_${featuredPostPreviewRecord.id}`,
		title: featuredPostPreviewRecord.title,
		author: featuredPostPreviewRecord.author,
		publishedDate: new Date(featuredPostPreviewRecord.publishedDate),
		snippet: removeMarkup(featuredPostPreviewRecord.snippet),
		postLink: new URL(featuredPostPreviewRecord.postLink),
		thumbnail: {
			source: featuredPostPreviewRecord.thumbnailSource,
			alt: `${featuredPostPreviewRecord.title} Thumbnail`,
			placeholder: imagePlaceholder,
		},
	});
	return { recentPostPreviewModels, featuredPostPreviewModel };
}
