import siteSectionModelInstantiator from "@/app/components/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/widgets/site-section/SiteSection";
import Carousel from "@/app/components/widgets/carousel/Carousel";
import ImageCardSkeleton from "@/app/components/widgets/image-card-skeleton/ImageCardSkeleton";
import ArtImage from "@/app/components/widgets/art-image/ArtImage";
import carouselModelInstantiator from "@/app/components/widgets/carousel/CarouselModel";
import imageCardSkeletonModelInstantiator from "@/app/components/widgets/image-card-skeleton/ImageCardSkeletonModel";
import { useArtImageRepository } from "@/app/repositories/ArtImageRepository";

export default function ArtSection() {
	const artImages = useArtImageRepository();
	return (
		<SiteSection
			siteSectionModelInstance={siteSectionModelInstantiator.instantiate({
				id: "art",
				sectionName: "art",
				sectionTitle: "Art",
			})}
		>
			<Carousel
				carouselModelInstance={carouselModelInstantiator.instantiate({
					id: "art-image-carousel",
				})}
			>
				{artImages
					? artImages.map((artImage) => (
							<ArtImage
								key={artImage.id}
								artImageModelInstance={artImage}
							/>
						))
					: Array(6)
							.fill(1)
							.map(
								(
									_,
									index // TODO: gridContainer model columns here
								) => (
									<ImageCardSkeleton
										key={index}
										imageCardSkeletonModelInstance={imageCardSkeletonModelInstantiator.instantiate(
											{
												id: `art-image-skeleton_${index}`, //TODO: Sloppy
											}
										)}
									/>
								)
							)}
			</Carousel>
		</SiteSection>
	);
}
