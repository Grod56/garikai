import SiteSection from "@/app/components/content/site-section/SiteSection";
import Carousel from "@/app/components/widgets/carousel/Carousel";
import ArtImagePreview from "@/app/components/content/art-image-preview/ArtImagePreview";
import { useArtImagePreviewRepository } from "@/app/repositories/ArtImagePreviewRepository";
import ArtImageSkeleton from "@/app/components/widgets/art-image-skeleton/ArtImageSkeleton";
import { useSiteSectionModel } from "@/app/components/content/site-section/SiteSectionModel";
import { useCarouselModel } from "@/app/components/widgets/carousel/CarouselModel";
import { useArtImageSkeletonModel } from "@/app/components/widgets/art-image-skeleton/ArtImageSkeletonModel";

export default function ArtSection() {
	const siteSectionModel = useSiteSectionModel("art", "art", "Art");
	const carouselModel = useCarouselModel();
	const artImagePreviews = useArtImagePreviewRepository();

	return (
		<SiteSection model={siteSectionModel}>
			<Carousel model={carouselModel}>
				{artImagePreviews
					? artImagePreviews.map((artImagePreview) => (
							<ArtImagePreview
								key={artImagePreview.modelInstance.id}
								model={artImagePreview}
							/>
						))
					: Array(6)
							.fill(1)
							.map(
								(
									_,
									index // TODO: gridContainer model columns here
								) => (
									<ArtImageSkeleton
										key={index}
										model={useArtImageSkeletonModel()}
									/>
								)
							)}
			</Carousel>
		</SiteSection>
	);
}
