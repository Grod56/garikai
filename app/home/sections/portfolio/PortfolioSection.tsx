import siteSectionModelInstantiator from "@/app/components/corporeal/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/corporeal/widgets/site-section/SiteSection";
import Banner from "@/app/components/corporeal/widgets/banner/Banner";
import bannerModelInstantiator from "@/app/components/corporeal/widgets/banner/BannerModel";

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
