import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateArtImageSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ArtImageSkeletonModelInstantiator";
import ArtImageSkeleton from "@/app-library/components/widgets/art-image-skeleton/ui/ArtImageSkeleton";
import { instantiateCarouselModel } from "@/app-library/default-implementations/model-instantiators/CarouselModelInstantiator";
import Carousel from "@/app-library/components/widgets/carousel/ui/Carousel";
import { instantiateSupabaseArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/ArtImagePreviewAPIInstantiator";
import { instantiateArtImagePreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/ArtImagePreviewRepositoryModelInstantiator";
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
	const { modelView: repositoryModelView } = useRepository(() =>
		instantiateArtImagePreviewRepositoryModel(
			instantiateSupabaseArtImagePreviewAPI()
		)
	);

	return (
		<SiteSection model={siteSectionModel}>
			<Carousel model={carouselModel}>
				{repositoryModelView
					? repositoryModelView.artImagePreviewModels.map(
							(artImagePreviewModel) => (
								<ArtImagePreview
									key={artImagePreviewModel.modelView.id}
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
