import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import ComponentPlaceholder from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import { ArtImageSkeletonModel } from "@/app-library/components/widget/art-image-skeleton/ArtImageSkeletonModel";
import ArtImageSkeleton from "@/app-library/components/widget/art-image-skeleton/ui/ArtImageSkeleton";
import Carousel from "@/app-library/components/widget/carousel/ui/Carousel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import { ArtImagePreviewsPlaceholderModel } from "./ArtImagePreviewsPlaceholderModel";

const ArtImagePreviewsPlaceholder = function ({ model }) {
	const { artImagePreviewModels } = model.modelView;

	const ArtImagePreviewsContainerComponent = Carousel<ArtImagePreviewModel>;
	const artImagePreviewsContainerComponentModel = artImagePreviewModels && {
		modelView: {
			componentListModel: instantiateReadonlyModel({
				Component: ArtImagePreview,
				componentModels: artImagePreviewModels,
			}),
		},
	};
	const PlaceholderComponent = () => (
		<Carousel
			model={{
				modelView: {
					componentListModel: instantiateReadonlyModel({
						Component: ArtImageSkeleton,
						componentModels: Array<ArtImageSkeletonModel>(6).fill(
							instantiateReadonlyModel({})
						),
					}),
				},
			}}
		/>
	);

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					placeholderedComponentModel:
						artImagePreviewsContainerComponentModel,
					PlaceholderedComponent: ArtImagePreviewsContainerComponent,
					PlaceholderComponent,
				},
			}}
		/>
	);
} as ModeledVoidComponent<ArtImagePreviewsPlaceholderModel>;

export default ArtImagePreviewsPlaceholder;
