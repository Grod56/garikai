"use client";
import { useMainModel } from "../components/content/main/MainModel";
import Main from "../components/content/main/Main";
import BioSection from "./sections/bio/BioSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ArtSection from "./sections/art/ArtSection";
import BlogSection from "./sections/blog/BlogSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";

export default function Home() {
	const mainModel = useMainModel("home", "home");
	return (
		<Main model={mainModel}>
			<BioSection />
			<PortfolioSection />
			<ArtSection />
			<BlogSection />
			<ReadingListSection />
			<ContactDetailsSection />
		</Main>
	);
}
