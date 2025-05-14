import { PostPreviewModel } from "@/app-library/components/content/post-preview/PostPreviewModel";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";
import ComponentPlaceholder from "../../../../../../app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import ImageCardSkeleton from "../../../../../../app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { RecentPostPreviewsPlaceholderModel } from "./RecentPostPreviewsPlaceholderModel";

const RecentPostPreviewsPlaceholder = function ({ model }) {
	const { placeholderedRecentPostPreviewModels } = model.modelView;

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					PlaceholderedComponent: ComponentList<PostPreviewModel>,
					placeholderedComponentModel:
						placeholderedRecentPostPreviewModels && {
							modelView: {
								componentModels:
									placeholderedRecentPostPreviewModels,
								Component: PostPreview,
							},
						},
					PlaceholderComponent: () => (
						<ComponentList
							model={{
								modelView: {
									componentModels:
										Array<ImageCardSkeletonModel>(3).fill(
											instantiateImageCardSkeletonModel({
												orientation: "vertical",
											})
										),
									Component: ImageCardSkeleton,
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
