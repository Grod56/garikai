"use client";
import { instantiateSupabaseArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/ArtImagePreviewAPIInstantiator";
import { instantiateSupabaseBookPreviewAPI } from "@/app-library/default-implementations/content-apis/BookPreviewAPIInstantiator";
import { instantiateBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/PostPreviewAPIInstantiator";
import Main from "../../../app-library/components/content/main/ui/Main";
import { instantiateMainModel } from "../../../app-library/default-implementations/model-instantiators/MainModelInstantiator";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";
import "./home.scss";

// Config
const blogURL = new URL(process.env.NEXT_PUBLIC_BLOG_URL!);

export default function Home() {
	const mainModel = instantiateMainModel({ id: "home", name: "home" });
	const artImagePreviewAPI = instantiateSupabaseArtImagePreviewAPI();
	const postPreviewAPI = instantiateBloggerPostPreviewAPI();
	const bookPreviewAPI = instantiateSupabaseBookPreviewAPI();

	return (
		<Main model={mainModel}>
			<BioSection
				model={{
					modelView: {
						sectionTitle: "Bio",
					},
				}}
			/>
			<PortfolioSection
				model={{
					modelView: {
						sectionTitle: "Portfolio",
					},
				}}
			/>
			<ArtSection
				model={{
					modelView: {
						sectionTitle: "Art",
						artImagePreviewAPI,
					},
				}}
			/>
			<BlogSection
				model={{
					modelView: {
						sectionTitle: "Blog",
						postPreviewAPI,
						blogURL,
					},
				}}
			/>
			<ReadingListSection
				model={{
					modelView: {
						sectionTitle: "Reading List",
						bookPreviewAPI,
					},
				}}
			/>
			<ContactDetailsSection
				model={{
					modelView: {
						sectionTitle: "Contact Details",
					},
				}}
			/>
		</Main>
	);
}
