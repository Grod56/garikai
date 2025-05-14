import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { BookPreviewsPlaceholderModel } from "./BookPreviewsPlaceholderModel";
import { BookPreviewModel } from "@/app-library/components/content/book-preview/BookPreviewModel";
import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import ComponentPlaceholder from "@/app-library/components/ethereal/component-placeholder/ComponentPlaceholder";
import { ImageCardSkeletonModel } from "@/app-library/components/widget/image-card-skeleton/ImageCardSkeletonModel";
import ImageCardSkeleton from "@/app-library/components/widget/image-card-skeleton/ui/ImageCardSkeleton";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";

const BookPreviewsPlaceholder = function ({ model }) {
	const { placeholderedBookPreviewModels } = model.modelView;

	return (
		<ComponentPlaceholder
			model={{
				modelView: {
					PlaceholderedComponent: ComponentList<BookPreviewModel>,
					placeholderedComponentModel:
						placeholderedBookPreviewModels && {
							modelView: {
								componentModels: placeholderedBookPreviewModels,
								Component: BookPreview,
							},
						},
					PlaceholderComponent: () => (
						<ComponentList
							model={{
								modelView: {
									componentModels:
										Array<ImageCardSkeletonModel>(6).fill(
											instantiateImageCardSkeletonModel({
												orientation: "flexible",
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
} as ModeledVoidComponent<BookPreviewsPlaceholderModel>;

export default BookPreviewsPlaceholder;
