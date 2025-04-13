import { useSiteSectionModel } from "@/app/components/content/site-section/SiteSectionModel";
import SiteSection from "@/app/components/content/site-section/SiteSection";
import Banner from "@/app/components/content/banner/Banner";
import { useBannerModel } from "@/app/components/content/banner/BannerModel";

export default function PortfolioSection() {
	const siteSectionModel = useSiteSectionModel(
		"portfolio",
		"portfolio",
		"Portfolio"
	);
	return (
		<SiteSection model={siteSectionModel}>
			<Banner model={useBannerModel("portfolio-banner", "Coming Soon")} />
		</SiteSection>
	);
}
