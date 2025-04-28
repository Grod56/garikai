import { instantiateBannerModel } from "@/app-library/components/content/banner/model-instantiator/BannerModelInstantiator";
import Banner from "@/app-library/components/content/banner/ui/Banner";
import { instantiateSiteSectionModel } from "@/app-library/components/content/site-section/model-instantiator/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";

export default function PortfolioSection() {
	const siteSectionModel = instantiateSiteSectionModel({
		id: "portfolio",
		sectionName: "portfolio",
		sectionTitle: "Portfolio",
	});
	return (
		<SiteSection model={siteSectionModel}>
			<Banner
				model={instantiateBannerModel({
					id: "portfolio-banner",
					bannerText: "Coming Soon",
				})}
			/>
		</SiteSection>
	);
}
