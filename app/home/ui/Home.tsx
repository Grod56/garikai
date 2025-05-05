"use client";
import { ArtImagePreviewRepositoryModel } from "@/app-library/content-repositories/ArtImagePreviewRepositoryModel";
import { BookPreviewRepositoryModel } from "@/app-library/content-repositories/BookPreviewRepositoryModel";
import { PostPreviewRepositoryModel } from "@/app-library/content-repositories/PostPreviewRepositoryModel";
import { instantiateSupabaseArtImagePreviewAPI } from "@/app-library/default-implementations/content-apis/ArtImagePreviewAPIInstantiator";
import { instantiateSupabaseBookPreviewAPI } from "@/app-library/default-implementations/content-apis/BookPreviewAPIInstantiator";
import { instantiateBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/PostPreviewAPIInstantiator";
import { instantiateArtImagePreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/ArtImagePreviewRepositoryModelInstantiator";
import { instantiateBookPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/BookPreviewRepositoryModelInstantiator";
import { instantiatePostPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/PostPreviewRepositoryModelInstantiator";
import { useRepository } from "@/app-library/utilities/use-repository";
import Main from "../../../app-library/components/content/main/ui/Main";
import { instantiateMainModel } from "../../../app-library/default-implementations/model-instantiators/MainModelInstantiator";
import ArtSection from "./sections/art/ArtSection";
import BioSection from "./sections/bio/BioSection";
import BlogSection from "./sections/blog/BlogSection";
import ContactDetailsSection from "./sections/contact-details/ContactDetailsSection";
import PortfolioSection from "./sections/portfolio/PortfolioSection";
import ReadingListSection from "./sections/reading-list/ReadingListSection";
import "./home.scss";

export default function Home() {
	const mainModel = instantiateMainModel({ id: "home", name: "home" });

	const artImagePreviewRepositoryModel =
		useRepository<ArtImagePreviewRepositoryModel>(() =>
			instantiateArtImagePreviewRepositoryModel(
				instantiateSupabaseArtImagePreviewAPI()
			)
		);

	const postPreviewRepositoryModel =
		useRepository<PostPreviewRepositoryModel>(() =>
			instantiatePostPreviewRepositoryModel(
				instantiateBloggerPostPreviewAPI()
			)
		);
	const blogURL = new URL(process.env.NEXT_PUBLIC_BLOG_URL!);

	const bookPreviewRepositoryModel =
		useRepository<BookPreviewRepositoryModel>(() =>
			instantiateBookPreviewRepositoryModel(
				instantiateSupabaseBookPreviewAPI()
			)
		);

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
						artImagePreviewRepositoryModel,
					},
				}}
			/>
			<BlogSection
				model={{
					modelView: {
						sectionTitle: "Blog",
						postPreviewRepositoryModel,
						blogURL,
					},
				}}
			/>
			<ReadingListSection
				model={{
					modelView: {
						sectionTitle: "Reading List",
						bookPreviewRepositoryModel,
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
