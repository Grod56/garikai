import { instantiateFeaturedPostPreviewModel } from "@/app-library/default-implementations/model-instantiators/post-preview/FeaturedPostPreviewModelInstantiator";
import { instantiatePostPreviewModel } from "@/app-library/default-implementations/model-instantiators/post-preview/PostPreviewModelInstantiator";
import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import { ImagePlaceholder } from "@/app-library/custom-types/Image";
import { InstanceInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import { removeMarkup } from "@/app-library/utilities/miscelleneous";
import {
	PostPreviewAPI,
	PostPreviewRecord,
} from "../../../content-repositories/post-preview/PostPreviewAPI";
import {
	PostPreviewRepositoryModelInstance,
	PostPreviewRepositoryModelInteraction,
} from "../../../content-repositories/post-preview/PostPreviewRepositoryModel";

const imagePlaceholder = process.env
	.NEXT_PUBLIC_DEFAULT_IMAGE_PLACEHOLDER! as ImagePlaceholder;

export function instantiatePostPreviewRepositoryModel(api: PostPreviewAPI) {
	const instanceInteractionInterface = _instanceInteractionInterface(api);
	const model = {
		modelInstance: null as PostPreviewRepositoryModelInstance,
		async interact(interaction: PostPreviewRepositoryModelInteraction) {
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

type PostPreviewRepositoryInstanceInteractionInterface =
	InstanceInteractionInterface<
		PostPreviewRepositoryModelInstance,
		PostPreviewRepositoryModelInteraction
	>;

function _instanceInteractionInterface(
	api: PostPreviewAPI
): PostPreviewRepositoryInstanceInteractionInterface {
	const getModelInstance = async (
		interaction: PostPreviewRepositoryModelInteraction
	): Promise<PostPreviewRepositoryModelInstance> => {
		try {
			switch (interaction.interactionName) {
				case "RETRIEVE_MODELS":
					return await _retrievePostPreviewModels(api);
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
async function _retrievePostPreviewModels(
	api: PostPreviewAPI
): Promise<PostPreviewRepositoryModelInstance> {
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
