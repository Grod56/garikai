import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import FeaturedPostPreview from "../../../../../../app-library/components/content/post-preview/ui/FeaturedPostPreview";
import { FeaturedPostPreviewPlaceholderModel } from "./FeaturedPostPreviewPlaceholderModel";
import ComponentPlaceholder from "../../../../../../app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import ImageCardSkeleton from "../../../../../../app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";

const FeaturedPostPreviewPlaceholder = function ({ model }) {
	const { placeholderedFeaturedPostPreviewModel } = model.modelView;

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					placeholderedComponentModel:
						placeholderedFeaturedPostPreviewModel,
					PlaceholderedComponent: FeaturedPostPreview,
					PlaceholderComponent: () => (
						<ImageCardSkeleton
							model={instantiateImageCardSkeletonModel({
								orientation: "flexible",
							})}
						/>
					),
				},
			}}
		/>
	);
} as ModeledVoidComponent<FeaturedPostPreviewPlaceholderModel>;

export default FeaturedPostPreviewPlaceholder;
