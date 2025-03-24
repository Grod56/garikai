import siteSectionModelInstantiator from "@/app/components/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/widgets/site-section/SiteSection";
import Banner from "@/app/components/widgets/banner/Banner";
import bannerModelInstantiator from "@/app/components/widgets/banner/BannerModel";

export default function PortfolioSection() {
	return (
		<SiteSection
			siteSectionModelInstance={siteSectionModelInstantiator.instantiate({
				id: "portfolio",
				sectionName: "portfolio",
				sectionTitle: "Portfolio",
			})}
		>
			<Banner
				bannerModelInstance={bannerModelInstantiator.instantiate({
					id: "portfolio-coming-soon-banner",
					bannerText: "Coming Soon",
				})}
			/>
		</SiteSection>
	);
}
