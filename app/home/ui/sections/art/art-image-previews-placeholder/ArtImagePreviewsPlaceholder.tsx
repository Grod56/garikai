import { ArtImagePreviewModel } from "@/app-library/components/content/art-image-preview/art-image-preview-model";
import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import { ArtImageSkeletonModel } from "@/app-library/components/widget/art-image-skeleton/art-image-skeleton-model";
import ArtImageSkeleton from "@/app-library/components/widget/art-image-skeleton/ui/ArtImageSkeleton";
import Carousel from "@/app-library/components/widget/carousel/ui/Carousel";
import { ArtImagePreviewsPlaceholderModel } from "./art-image-previews-placeholder-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import {
	ComponentList,
	ComponentPlaceholder,
	ModeledVoidComponent,
} from "@mvc-react/components";

import "./art-image-previews-placeholder.scss";

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
