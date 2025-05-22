import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { newPostPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/PostPreviewRepositoryModelInstantiator";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import FeaturedPostPreviewPlaceholder from "@/app/home/ui/sections/blog/featured-post-preview-placeholder/FeaturedPostPreviewPlaceholder";
import { BlogSectionModel } from "./BlogSectionModel";
import RecentPostPreviewsPlaceholder from "./recent-posts-placeholder/RecentPostPreviewsPlaceholder";
import { newReadonlyModel } from "@mvc-react/mvc";
import "./blog.scss";
import Link from "next/link";

const BlogSection = function ({ model }) {
	const { sectionTitle, postPreviewAPI, blogURL } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(() =>
		newPostPreviewRepositoryModel(postPreviewAPI)
	);

	return (
		<SiteSection
			model={newReadonlyModel({
				id: "blog",
				sectionName: "blog",
				sectionTitle: sectionTitle,
			})}
		>
			<SiteSubsection
				model={newReadonlyModel({
					id: "featured-post",
					subsectionTitle: "Featured Post",
				})}
			>
				<FeaturedPostPreviewPlaceholder
					model={newReadonlyModel({
						featuredPostPreviewModel:
							repositoryModelView?.featuredPostPreviewModel,
					})}
				/>
			</SiteSubsection>
			<SiteSubsection
				model={newReadonlyModel({
					id: "recent-posts",
					subsectionTitle: "Recent Posts",
				})}
			>
				<div className="recent-posts-container">
					<RecentPostPreviewsPlaceholder
						model={newReadonlyModel({
							recentPostPreviewModels:
								repositoryModelView?.recentPostPreviewModels,
						})}
					/>
				</div>
			</SiteSubsection>
			<Link href={blogURL.href} className="view-more" target="_blank">
				View More
			</Link>
		</SiteSection>
	);
} as ModeledVoidComponent<BlogSectionModel>;

export default BlogSection;
