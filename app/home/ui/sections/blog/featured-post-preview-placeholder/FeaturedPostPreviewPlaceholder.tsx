import FeaturedPostPreview from "@/app-library/components/content/post-preview/ui/FeaturedPostPreview";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { FeaturedPostPreviewPlaceholderModel } from "./featured-post-preview-placeholder-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import {
	ComponentPlaceholder,
	ModeledVoidComponent,
} from "@mvc-react/components";

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
