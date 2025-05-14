import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateArtImagePreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/ArtImagePreviewRepositoryModelInstantiator";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";
import { useRepository } from "@/app-library/utilities/use-repository";
import ArtImagePreviewsPlaceholder from "./art-image-previews-placeholder/ArtImagePreviewsPlaceholder";
import { ArtSectionModel } from "./ArtSectionModel";

const ArtSection = function ({ model }) {
	const { sectionTitle, artImagePreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useRepository(() =>
		instantiateArtImagePreviewRepositoryModel(artImagePreviewAPI)
	);

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "art",
				sectionName: "art",
				sectionTitle: sectionTitle,
			})}
		>
			<ArtImagePreviewsPlaceholder
				model={{
					modelView: {
						placeholderedArtImagePreviewModels:
							repositoryModelView?.artImagePreviewModels,
					},
				}}
			/>
		</SiteSection>
	);
} as ModeledVoidComponent<ArtSectionModel>;

export default ArtSection;
