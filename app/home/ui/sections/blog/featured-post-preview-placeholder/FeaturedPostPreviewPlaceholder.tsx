import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import FeaturedPostPreview from "../../../../../../app-library/components/content/post-preview/ui/FeaturedPostPreview";
import ComponentPlaceholder from "../../../../../../app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import ImageCardSkeleton from "../../../../../../app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { FeaturedPostPreviewPlaceholderModel } from "./FeaturedPostPreviewPlaceholderModel";
import { newReadonlyModel } from "@mvc-react/mvc";

const FeaturedPostPreviewPlaceholder = function ({ model }) {
	const { featuredPostPreviewModel } = model.modelView;

	return (
		<ComponentPlaceholder
			model={newReadonlyModel({
				placeholderedComponentModel: featuredPostPreviewModel,
				PlaceholderedComponent: FeaturedPostPreview,
				PlaceholderComponent: () => (
					<ImageCardSkeleton
						model={newReadonlyModel({
							orientation: "flexible",
						})}
					/>
				),
			})}
		/>
	);
} as ModeledVoidComponent<FeaturedPostPreviewPlaceholderModel>;

export default FeaturedPostPreviewPlaceholder;
