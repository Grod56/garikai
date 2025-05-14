import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import ComponentPlaceholder from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import { ArtImageSkeletonModel } from "@/app-library/components/widget/art-image-skeleton/ArtImageSkeletonModel";
import ArtImageSkeleton from "@/app-library/components/widget/art-image-skeleton/ui/ArtImageSkeleton";
import Carousel from "@/app-library/components/widget/carousel/ui/Carousel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateArtImageSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ArtImageSkeletonModelInstantiator";
import { ArtImagePreviewsPlaceholderModel } from "./ArtImagePreviewsPlaceholderModel";

const ArtImagePreviewsPlaceholder = function ({ model }) {
	const { placeholderedArtImagePreviewModels } = model.modelView;

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					PlaceholderedComponent: Carousel<ArtImagePreviewModel>,
					placeholderedComponentModel:
						placeholderedArtImagePreviewModels && {
							modelView: {
								componentListModel: {
									modelView: {
										Component: ArtImagePreview,
										componentModels:
											placeholderedArtImagePreviewModels,
									},
								},
							},
						},
					PlaceholderComponent: () => (
						<Carousel
							model={{
								modelView: {
									componentListModel: {
										modelView: {
											Component: ArtImageSkeleton,
											componentModels:
												Array<ArtImageSkeletonModel>(
													6
												).fill(
													instantiateArtImageSkeletonModel()
												),
										},
									},
								},
							}}
						/>
					),
				},
			}}
		/>
	);
} as ModeledVoidComponent<ArtImagePreviewsPlaceholderModel>;

export default ArtImagePreviewsPlaceholder;
