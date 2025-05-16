import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import { ComponentListModel } from "@/app-library/components/ethereal/component-list/ComponentListModel";
import ComponentPlaceholder from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import { PlaceholderedComponentModel } from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholderModel";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import { BookPreviewsPlaceholderModel } from "./BookPreviewsPlaceholderModel";

const BookPreviewsPlaceholder = function ({ model }) {
	const { bookPreviewModels } = model.modelView;

	const BookPreviewsContainerComponent = ComponentList<BookPreviewModel>;
	const bookPreviewsContainerComponentModel: PlaceholderedComponentModel<
		ComponentListModel<BookPreviewModel>
	> =
		bookPreviewModels &&
		instantiateReadonlyModel({
			componentModels: bookPreviewModels,
			Component: BookPreview,
		});
	const PlaceholderComponent = () => (
		<ComponentList
			model={instantiateReadonlyModel({
				Component: ImageCardSkeleton,
				componentModels: Array<ImageCardSkeletonModel>(6).fill(
					instantiateReadonlyModel({
						orientation: "flexible",
					})
				),
			})}
		/>
	);

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					PlaceholderedComponent: BookPreviewsContainerComponent,
					placeholderedComponentModel:
						bookPreviewsContainerComponentModel,
					PlaceholderComponent,
				},
			}}
		/>
	);
} as ModeledVoidComponent<BookPreviewsPlaceholderModel>;

export default BookPreviewsPlaceholder;
