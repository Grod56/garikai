import Banner from "@/app-library/components/content/banner/ui/Banner";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateBannerModel } from "@/app-library/default-implementations/model-instantiators/BannerModelInstantiator";
import { PortfolioSectionModel } from "./PortfolioSectionModel";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";

const PortfolioSection = function ({ model }) {
	const { sectionTitle } = model.modelView;

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: sectionTitle,
			})}
		>
			<Banner
				model={instantiateBannerModel({
					id: "portfolio-banner",
					bannerText: "Coming Soon",
				})}
			/>
		</SiteSection>
	);
} as ModeledVoidComponent<PortfolioSectionModel>;

export default PortfolioSection;
