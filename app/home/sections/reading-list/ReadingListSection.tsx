import siteSectionModelInstantiator from "@/app/components/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/widgets/site-section/SiteSection";
import imageCardSkeletonModelInstantiator from "@/app/components/widgets/image-card-skeleton/ImageCardSkeletonModel";
import gridContainerModelInstantiator from "@/app/components/widgets/grid-container/GridContainerModel";
import BookPreview from "@/app/components/widgets/book-preview/BookPreview";
import GridContainer from "@/app/components/widgets/grid-container/GridContainer";
import ImageCardSkeleton from "@/app/components/widgets/image-card-skeleton/ImageCardSkeleton";
import { useBookPreviewRepository } from "@/app/repositories/BookPreviewRepository";

export default function ReadingListSection() {
	const bookPreviews = useBookPreviewRepository();

	return (
		<SiteSection
			siteSectionModelInstance={siteSectionModelInstantiator.instantiate({
				id: "reading-list",
				sectionName: "reading-list",
				sectionTitle: "Reading List",
			})}
		>
			<p>
				Collection of material that has greatly influenced the way I
				think—together with stuff I'm currently working on. Will
				probably split these into their appropriate categories for
				clarity in the near future.
			</p>
			<GridContainer
				gridContainerModelInstance={gridContainerModelInstantiator.instantiate(
					{
						id: "reading-list-grid-container",
						maxXorY: 2,
						orientation: "horizontal",
						isOverflow: false,
					}
				)}
			>
				{bookPreviews
					? bookPreviews.map((bookPreview) => (
							<BookPreview
								key={bookPreview.id}
								bookPreviewModelInstance={bookPreview}
							/>
						))
					: Array(6)
							.fill(1)
							.map((_, index) => (
								<ImageCardSkeleton
									key={index}
									imageCardSkeletonModelInstance={imageCardSkeletonModelInstantiator.instantiate(
										{
											id: `reading-list-skeleton_${index}`,
											orientation: "flexible",
										}
									)}
								/>
							))}
			</GridContainer>
		</SiteSection>
	);
}
