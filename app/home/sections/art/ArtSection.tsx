import siteSectionModelInstantiator from "@/app/components/corporeal/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/corporeal/widgets/site-section/SiteSection";
import Carousel from "@/app/components/corporeal/widgets/carousel/Carousel";
import ArtImage from "@/app/components/corporeal/widgets/art-image/ArtImage";
import carouselModelInstantiator from "@/app/components/corporeal/widgets/carousel/CarouselModel";
import { useArtImageRepository } from "@/app/repositories/ArtImageRepository";
import ArtImageSkeleton from "@/app/components/corporeal/widgets/art-image-skeleton/ArtImageSkeleton";
import artImageSkeletonModelInstantiator from "@/app/components/corporeal/widgets/art-image-skeleton/ArtImageSkeletonModel";

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
									<ArtImageSkeleton
										key={index}
										artImageSkeletonModelInstance={artImageSkeletonModelInstantiator.instantiate(
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
