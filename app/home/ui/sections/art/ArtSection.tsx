import ArtImagePreview from "@/app-library/components/content/art-image-preview/ui/ArtImagePreview";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import ArtImageSkeleton from "@/app-library/components/widgets/art-image-skeleton/ui/ArtImageSkeleton";
import Carousel from "@/app-library/components/widgets/carousel/ui/Carousel";
import { ModeledEmptyComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateArtImageSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ArtImageSkeletonModelInstantiator";
import { ArtSectionModel } from "./ArtSectionModel";
import { instantiateCarouselModel } from "@/app-library/default-implementations/model-instantiators/CarouselModelInstantiator";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";

const ArtSection = function ({ model }) {
	const { sectionTitle, artImagePreviewRepositoryModel: repositoryModel } =
		model.modelView;
	const { modelView: repositoryModelView } = repositoryModel;

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "art",
				sectionName: "art",
				sectionTitle: sectionTitle,
			})}
		>
			<Carousel model={instantiateCarouselModel()}>
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
} as ModeledEmptyComponent<ArtSectionModel>;

export default ArtSection;
