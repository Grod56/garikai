import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import ArtImagePreviewsPlaceholder from "./art-image-previews-placeholder/ArtImagePreviewsPlaceholder";
import { ArtSectionModel } from "./ArtSectionModel";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ModeledVoidComponent } from "@mvc-react/components";
import { newArtImagePreviewRepositoryVIInterface } from "@/app-library/default-implementations/content-repositories/art-image-preview";
import { newStatifiableModel } from "@/app-library/utilities/miscelleneous";

const ArtSection = function ({ model }) {
	const { sectionTitle, artImagePreviewAPI } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(
		newStatifiableModel(
			newArtImagePreviewRepositoryVIInterface(artImagePreviewAPI)
		)
	);

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "art",
				sectionName: "art",
				sectionTitle: sectionTitle,
			})}
		>
			<ArtImagePreviewsPlaceholder
				model={newReadonlyModel({
					artImagePreviewModels:
						repositoryModelView?.artImagePreviewModels,
				})}
			/>
		</SiteSection>
	);
} as ModeledVoidComponent<ArtSectionModel>;

export default ArtSection;
