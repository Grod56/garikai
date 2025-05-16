import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import Banner from "@/app-library/components/widget/banner/ui/Banner";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import { PortfolioSectionModel } from "./PortfolioSectionModel";

const PortfolioSection = function ({ model }) {
	const { sectionTitle } = model.modelView;

	return (
		<SiteSection
			model={instantiateReadonlyModel({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: sectionTitle,
			})}
		>
			<Banner
				model={instantiateReadonlyModel({
					bannerText: "Coming Soon",
				})}
			/>
		</SiteSection>
	);
} as ModeledVoidComponent<PortfolioSectionModel>;

export default PortfolioSection;
