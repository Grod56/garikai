import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/site-section/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/grid-container/GridContainerModelInstantiator";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/image-card-skeleton/ImageCardSkeletonModelInstantiator";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { instantiateSupabaseBookPreviewAPI } from "@/app-library/default-implementations/content-repositories/book-preview/BookPreviewAPIInstantiator";
import { instantiateBookPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/book-preview/BookPreviewRepositoryModelInstantiator";
import { useRepository } from "@/app-library/utilities/use-repository";

export default function ReadingListSection() {
	const siteSectionModel = instantiateSiteSectionModel({
		id: "reading-list",
		sectionName: "reading-list",
		sectionTitle: "Reading List",
	});
	const { modelInstance: repositoryModelInstance } = useRepository(() =>
		instantiateBookPreviewRepositoryModel(
			instantiateSupabaseBookPreviewAPI()
		)
	);

	return (
		<SiteSection model={siteSectionModel}>
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
				{repositoryModelInstance
					? repositoryModelInstance.bookPreviewModels.map(
							(bookPreviewModel) => (
								<BookPreview
									key={bookPreviewModel.modelInstance.id}
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
}
