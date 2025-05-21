import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import Banner from "@/app-library/components/widget/banner/ui/Banner";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { PortfolioSectionModel } from "./PortfolioSectionModel";
import { newReadonlyModel } from "@mvc-react/mvc";

const PortfolioSection = function ({ model }) {
	const { sectionTitle } = model.modelView;

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: sectionTitle,
			})}
		>
			<Banner
				model={newReadonlyModel({
					bannerText: "Coming Soon",
				})}
			/>
		</SiteSection>
	);
} as ModeledVoidComponent<PortfolioSectionModel>;

export default PortfolioSection;
