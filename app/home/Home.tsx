"use client";
import mainModelInstantiator from ".././components/sections/main/MainModel";
import Main from ".././components/sections/main/Main";
import BioSection from "./sections/bio/BioSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ArtSection from "./sections/art/ArtSection";
import BlogSection from "./sections/blog/BlogSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";

export default function Home() {
	return (
		<Main
			mainModelInstance={mainModelInstantiator.instantiate({
				id: "home",
				name: "home",
			})}
		>
			<BioSection />
			<PortfolioSection />
			<ArtSection />
			<BlogSection />
			<ReadingListSection />
			<ContactDetailsSection />
		</Main>
	);
}
