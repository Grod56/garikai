import { BookPreviewModel } from "@/app-library/components/content/book-preview/book-preview-model";
import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/image-card-skeleton-model";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";

import { BookPreviewsPlaceholderModel } from "./book-previews-placeholder-model";
import { newReadonlyModel } from "@mvc-react/mvc";
import {
	ComponentList,
	PlaceholderedComponentModel,
	ComponentListModel,
	ComponentPlaceholder,
	ModeledVoidComponent,
} from "@mvc-react/components";

const BookPreviewsPlaceholder = function ({ model }) {
	const { bookPreviewModels } = model.modelView;

	const BookPreviewsContainerComponent = ComponentList<BookPreviewModel>;

	const bookPreviewsContainerComponentModel: PlaceholderedComponentModel<
		ComponentListModel<BookPreviewModel>
	> =
		bookPreviewModels &&
		newReadonlyModel({
			componentModels: bookPreviewModels,
			Component: BookPreview,
		});

	const PlaceholderComponent = () => (
		<ComponentList
			model={newReadonlyModel({
				Component: ImageCardSkeleton,
				componentModels: Array<ImageCardSkeletonModel>(6).fill(
					newReadonlyModel({
						orientation: "flexible",
					}),
				),
			})}
		/>
	);

	return (
		<ComponentPlaceholder
			model={newReadonlyModel({
				PlaceholderedComponent: BookPreviewsContainerComponent,
				placeholderedComponentModel:
					bookPreviewsContainerComponentModel,
				PlaceholderComponent,
			})}
		/>
	);
} as ModeledVoidComponent<BookPreviewsPlaceholderModel>;

export default BookPreviewsPlaceholder;
