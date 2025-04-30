import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import { instantiateSiteSectionModel } from "@/app-library/components/content/site-section/model-instantiator/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateArtImageSkeletonModel } from "@/app-library/components/widgets/art-image-skeleton/model-instantiator/ArtImageSkeletonModelInstantiator";
import ArtImageSkeleton from "@/app-library/components/widgets/art-image-skeleton/ui/ArtImageSkeleton";
import { instantiateCarouselModel } from "@/app-library/components/widgets/carousel/model-instantiator/CarouselModelInstantiator";
import Carousel from "@/app-library/components/widgets/carousel/ui/Carousel";
import { getSupabaseArtImagePreviewAPI } from "@/app-library/content-repositories/art-image-preview/default-instantiator/ArtImagePreviewAPIInstantiator";
import { instantiateArtImagePreviewRepositoryModel } from "@/app-library/content-repositories/art-image-preview/default-instantiator/ArtImagePreviewRepositoryModelInstantiator";
import { useStatefulReadonlyModel } from "@/app-library/utilities/model-transformer";
import { useRepository } from "@/app-library/utilities/use-repository";

export default function ArtSection() {
	const siteSectionModel = useStatefulReadonlyModel(
		instantiateSiteSectionModel({
			id: "art",
			sectionName: "art",
			sectionTitle: "Art",
		})
	);
	const carouselModel = useStatefulReadonlyModel(instantiateCarouselModel());
	const { modelInstance: repositoryModelInstance } = useRepository(() =>
		instantiateArtImagePreviewRepositoryModel(
			getSupabaseArtImagePreviewAPI()
		)
	);

	return (
		<SiteSection model={siteSectionModel}>
			<Carousel model={carouselModel}>
				{repositoryModelInstance
					? repositoryModelInstance.artImagePreviewModels.map(
							(artImagePreviewModel) => (
								<ArtImagePreview
									key={artImagePreviewModel.modelInstance.id}
									model={artImagePreviewModel}
								/>
							)
						)
					: Array(6)
							.fill(1)
							.map(
								(
									_,
									index // TODO: gridContainer model columns here
								) => (
									<ArtImageSkeleton
										key={index}
										model={instantiateArtImageSkeletonModel()}
									/>
								)
							)}
			</Carousel>
		</SiteSection>
	);
}
