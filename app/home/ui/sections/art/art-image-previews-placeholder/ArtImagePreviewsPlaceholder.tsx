import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/ArtImagePreviewModel";
import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import ComponentPlaceholder from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import { ArtImageSkeletonModel } from "@/app-library/components/widget/art-image-skeleton/ArtImageSkeletonModel";
import ArtImageSkeleton from "@/app-library/components/widget/art-image-skeleton/ui/ArtImageSkeleton";
import Carousel from "@/app-library/components/widget/carousel/ui/Carousel";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { ArtImagePreviewsPlaceholderModel } from "./ArtImagePreviewsPlaceholderModel";
import { newReadonlyModel } from "@mvc-react/mvc";
import "./art-image-previews-placeholder.scss";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";

const ArtImagePreviewsPlaceholder = function ({ model }) {
	const { artImagePreviewModels } = model.modelView;

	const ArtImagePreviewsContainerComponent = Carousel<ArtImagePreviewModel>;

	const artImagePreviewsContainerComponentModel =
		artImagePreviewModels &&
		newReadonlyModel({
			componentListModel: newReadonlyModel({
				Component: ArtImagePreview,
				componentModels: artImagePreviewModels,
			}),
		});

	const PlaceholderComponent = () => (
		<div className="art-image-placeholders-container">
			<ComponentList
				model={newReadonlyModel({
					Component: ArtImageSkeleton,
					componentModels: Array<ArtImageSkeletonModel>(6).fill(
						newReadonlyModel({})
					),
				})}
			/>
		</div>
	);

	return (
		<ComponentPlaceholder
			model={newReadonlyModel({
				placeholderedComponentModel:
					artImagePreviewsContainerComponentModel,
				PlaceholderedComponent: ArtImagePreviewsContainerComponent,
				PlaceholderComponent,
			})}
		/>
	);
} as ModeledVoidComponent<ArtImagePreviewsPlaceholderModel>;

export default ArtImagePreviewsPlaceholder;
