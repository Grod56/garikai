import { useSiteSectionModel } from "@/app/components/content/site-section/SiteSectionModel";
import SiteSection from "@/app/components/content/site-section/SiteSection";
import BookPreview from "@/app/components/content/book-preview/BookPreview";
import GridContainer from "@/app/components/widgets/grid-container/GridContainer";
import ImageCardSkeleton from "@/app/components/widgets/image-card-skeleton/ImageCardSkeleton";
import { useBookPreviewRepository } from "@/app/repositories/BookPreviewRepository";
import { useGridContainerModel } from "@/app/components/widgets/grid-container/GridContainerModel";
import { useImageCardSkeletonModel } from "@/app/components/widgets/image-card-skeleton/ImageCardSkeletonModel";

export default function ReadingListSection() {
	const siteSectionModel = useSiteSectionModel(
		"reading-list",
		"reading-list",
		"Reading List"
	);
	const bookPreviews = useBookPreviewRepository();

	return (
		<SiteSection model={siteSectionModel}>
			<p>
				Collection of material that has greatly influenced the way I
				think—together with stuff I'm currently working on. Will
				probably split these into their appropriate categories for
				clarity in the near future.
			</p>
			<GridContainer
				model={useGridContainerModel(2, "horizontal", false)}
			>
				{bookPreviews
					? bookPreviews.map((bookPreview) => (
							<BookPreview
								key={bookPreview.modelInstance.id}
								model={bookPreview}
							/>
						))
					: Array(6)
							.fill(1)
							.map((_, index) => (
								<ImageCardSkeleton
									key={index}
									model={useImageCardSkeletonModel(
										"flexible"
									)}
								/>
							))}
			</GridContainer>
		</SiteSection>
	);
}
