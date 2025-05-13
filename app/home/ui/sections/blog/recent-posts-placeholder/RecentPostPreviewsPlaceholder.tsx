import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import Unwrapper from "@/app-library/components/utility/unwrapper/Unwrapper";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";
import ComponentPlaceholder from "../../../../../../app-library/components/utility/component-placeholder/ComponentPlaceholder";
import ImageCardSkeleton from "../../../../../../app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { RecentPostPreviewsPlaceholderModel } from "./RecentPostPreviewsPlaceholderModel";

const RecentPostPreviewsPlaceholder = function ({ model }) {
	const { placeholderedRecentPostPreviewModels } = model.modelView;

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					placeholderedComponentModel:
						placeholderedRecentPostPreviewModels
							? {
									modelView: {
										wrappedModels:
											placeholderedRecentPostPreviewModels,
										UnwrappedModeledComponent: PostPreview,
									},
								}
							: undefined,
					PlaceholderedComponent: Unwrapper<PostPreviewModel>,
					PlaceholderComponent: () => (
						<Unwrapper
							model={{
								modelView: {
									wrappedModels:
										Array<ImageCardSkeletonModel>(3).fill(
											instantiateImageCardSkeletonModel({
												orientation: "vertical",
											})
										),
									UnwrappedModeledComponent:
										ImageCardSkeleton,
								},
							}}
						/>
					),
				},
			}}
		/>
	);
} as ModeledVoidComponent<RecentPostPreviewsPlaceholderModel>;

export default RecentPostPreviewsPlaceholder;
