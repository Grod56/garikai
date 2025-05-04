import { instantiateFeaturedPostPreviewModel } from "@/app-library/default-implementations/model-instantiators/FeaturedPostPreviewModelInstantiator";
import { instantiatePostPreviewModel } from "@/app-library/default-implementations/model-instantiators/PostPreviewModelInstantiator";
import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { ViewInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import { removeMarkup } from "@/app-library/utilities/miscelleneous";
import {
	PostPreviewAPI,
	PostPreviewRecord,
} from "../../content-apis/PostPreviewAPI";
import {
	PostPreviewRepositoryModelView,
	PostPreviewRepositoryModelInteraction,
} from "../../content-repositories/PostPreviewRepositoryModel";
import { RepositoryInteractionType } from "@/app-library/content-repositories/RepositoryModel";

const imagePlaceholder = process.env
	.NEXT_PUBLIC_DEFAULT_IMAGE_PLACEHOLDER! as ImagePlaceholder;

export function instantiatePostPreviewRepositoryModel(api: PostPreviewAPI) {
	const viewInteractionInterface = _viewInteractionInterface(api);
	const model = {
		modelView: null as PostPreviewRepositoryModelView,
		async interact(interaction: PostPreviewRepositoryModelInteraction) {
			try {
				this.modelView =
					await viewInteractionInterface.getModelView(interaction);
			} catch (error) {
				throw new Error(`Failed to update modelView`, {
					cause: error,
				});
			}
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
	const getModelView = async (
		interaction: PostPreviewRepositoryModelInteraction
	): Promise<PostPreviewRepositoryModelView> => {
		try {
			switch (interaction.type) {
				case RepositoryInteractionType.RETRIEVE:
					return await _retrievePostPreviewModels(api);
			}
		} catch (error) {
			throw new Error(`Failed to generate new model view`, {
				cause: error,
			});
		}
	};
	return {
		getModelView,
	};
}
async function _retrievePostPreviewModels(
	api: PostPreviewAPI
): Promise<PostPreviewRepositoryModelView> {
	try {
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
	} catch (error) {
		throw new Error(`An error occurred while fetching api records`, {
			cause: error,
		});
	}
}
