import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { ModeledEmptyComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/GridContainerModelInstantiator";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";
import { ReadingListSectionModel } from "./ReadingListSectionModel";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";

const ReadingListSection = function ({ model }) {
	const { sectionTitle, bookPreviewRepositoryModel: repositoryModel } =
		model.modelView;
	const { modelView: repositoryModelView } = repositoryModel;

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "reading-list",
				sectionName: "reading-list",
				sectionTitle: sectionTitle,
			})}
		>
			<p>
				Collection of material that has greatly influenced the way I
				think—together with stuff I&apos;m currently working on. Will
				probably split these into their appropriate categories for
				clarity in the near future.
			</p>
			<GridContainer
				model={instantiateGridContainerModel({
					maxXorY: 2,
					orientation: "horizontal",
					overflow: false,
				})}
			>
				{repositoryModelView
					? repositoryModelView.bookPreviewModels.map(
							(bookPreviewModel) => (
								<BookPreview
									key={bookPreviewModel.modelView.id}
									model={bookPreviewModel}
								/>
							)
						)
					: Array(6)
							.fill(1)
							.map((_, index) => (
								<ImageCardSkeleton
									key={index}
									model={instantiateImageCardSkeletonModel({
										orientation: "flexible",
									})}
								/>
							))}
			</GridContainer>
		</SiteSection>
	);
} as ModeledEmptyComponent<ReadingListSectionModel>;

export default ReadingListSection;
