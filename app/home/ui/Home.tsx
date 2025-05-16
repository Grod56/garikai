"use client";
import { instantiateSupabaseArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/ArtImagePreviewAPIInstantiator";
import { instantiateSupabaseBookPreviewAPI } from "@/app-library/default-implementations/content-apis/BookPreviewAPIInstantiator";
import { instantiateBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/PostPreviewAPIInstantiator";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import Main from "../../../app-library/components/content/main/ui/Main";
import "./home.scss";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";

// Config
const blogURL = new URL(process.env.NEXT_PUBLIC_BLOG_URL!);

export default function Home() {
	const mainModel = instantiateReadonlyModel({ id: "home", name: "home" });
	const artImagePreviewAPI = instantiateSupabaseArtImagePreviewAPI();
	const postPreviewAPI = instantiateBloggerPostPreviewAPI();
	const bookPreviewAPI = instantiateSupabaseBookPreviewAPI();

	return (
		<Main model={mainModel}>
			<BioSection
				model={instantiateReadonlyModel({
					sectionTitle: "Bio",
				})}
			/>
			<PortfolioSection
				model={instantiateReadonlyModel({
					sectionTitle: "Portfolio",
				})}
			/>
			<ArtSection
				model={instantiateReadonlyModel({
					sectionTitle: "Art",
					artImagePreviewAPI,
				})}
			/>
			<BlogSection
				model={instantiateReadonlyModel({
					sectionTitle: "Blog",
					postPreviewAPI,
					blogURL,
				})}
			/>
			<ReadingListSection
				model={instantiateReadonlyModel({
					sectionTitle: "Reading List",
					bookPreviewAPI,
				})}
			/>
			<ContactDetailsSection
				model={instantiateReadonlyModel({
					sectionTitle: "Contact Details",
				})}
			/>
		</Main>
	);
}
