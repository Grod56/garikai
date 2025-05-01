"use client";
import { useStatefulReadonlyModel } from "@/app-library/utilities/model-transformer";
import { instantiateMainModel } from "../../../app-library/default-implementations/model-instantiators/main/MainModelInstantiator";
import Main from "../../../app-library/components/content/main/ui/Main";
import "./home.scss";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";

export default function Home() {
	const mainModel = useStatefulReadonlyModel(
		instantiateMainModel({ id: "home", name: "home" })
	);
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
