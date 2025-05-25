"use client";
import { newSupabaseArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/art-image-preview";
import { newSupabaseBookPreviewAPI } from "@/app-library/default-implementations/content-apis/book-preview";
import { newBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/post-preview";
import Main from "@/app-library/components/content/main/ui/Main";
import "./home.scss";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";
import { newReadonlyModel } from "@mvc-react/mvc";
import { newSupabasePortfolioItemAPI } from "@/app-library/default-implementations/content-apis/portfolio-item";

// Config
const blogURL = new URL(process.env.NEXT_PUBLIC_BLOG_URL!);

export default function Home() {
	const mainModel = newReadonlyModel({ id: "home", name: "home" });
	const portfolioItemAPI = newSupabasePortfolioItemAPI();
	const artImagePreviewAPI = newSupabaseArtImagePreviewAPI();
	const postPreviewAPI = newBloggerPostPreviewAPI();
	const bookPreviewAPI = newSupabaseBookPreviewAPI();

	return (
		<Main model={mainModel}>
			<BioSection
				model={newReadonlyModel({
					sectionTitle: "Bio",
				})}
			/>
			<PortfolioSection
				model={newReadonlyModel({
					sectionTitle: "Portfolio",
					portfolioItemAPI,
				})}
			/>
			<ArtSection
				model={newReadonlyModel({
					sectionTitle: "Art",
					artImagePreviewAPI,
				})}
			/>
			<BlogSection
				model={newReadonlyModel({
					sectionTitle: "Blog",
					postPreviewAPI,
					blogURL,
				})}
			/>
			<ReadingListSection
				model={newReadonlyModel({
					sectionTitle: "Reading List",
					bookPreviewAPI,
				})}
			/>
			<ContactDetailsSection
				model={newReadonlyModel({
					sectionTitle: "Contact Details",
				})}
			/>
		</Main>
	);
}
