import BookPreview from "@/app-library/components/content/book-preview/ui/BookPreview";
import { instantiateSiteSectionModel } from "@/app-library/components/content/site-section/model-instantiator/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateGridContainerModel } from "@/app-library/components/widgets/grid-container/model-instantiator/GridContainerModelInstantiator";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import { instantiateImageCardSkeletonModel } from "@/app-library/components/widgets/image-card-skeleton/model-instantiator/ImageCardSkeletonModelInstantiator";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { getSupabaseBookPreviewAPI } from "@/app-library/content-repositories/book-preview/default-instantiator/BookPreviewAPIInstantiator";
import { instantiateBookPreviewRepository } from "@/app-library/content-repositories/book-preview/default-instantiator/BookPreviewRepositoryModelInstantiator";
import { useMemoizedInteractiveModel } from "@/app-library/utilities/model-transformer";
import { useEffect } from "react";

export default function ReadingListSection() {
	const siteSectionModel = instantiateSiteSectionModel({
		id: "reading-list",
		sectionName: "reading-list",
		sectionTitle: "Reading List",
	});
	const { modelInstance, interact } = useMemoizedInteractiveModel(
		instantiateBookPreviewRepository(getSupabaseBookPreviewAPI())
	);

	useEffect(() => {
		interact({ interactionName: "RETRIEVE_MODELS" });
	}, [interact]);

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
				{modelInstance
					? modelInstance.bookPreviewModels.map(
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
