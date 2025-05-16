import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import GridContainer from "@/app-library/components/widget/grid-container/ui/GridContainer";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiatePostPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/PostPreviewRepositoryModelInstantiator";
import { instantiateReadonlyModel } from "@/app-library/utilities/miscelleneous";
import { useStatefulRepository } from "@/app-library/utilities/use-repository";
import FeaturedPostPreviewPlaceholder from "@/app/home/ui/sections/blog/featured-post-preview-placeholder/FeaturedPostPreviewPlaceholder";
import { BlogSectionModel } from "./BlogSectionModel";
import RecentPostPreviewsPlaceholder from "./recent-posts-placeholder/RecentPostPreviewsPlaceholder";

const BlogSection = function ({ model }) {
	const { sectionTitle, postPreviewAPI, blogURL } = model.modelView;
	const { modelView: repositoryModelView } = useStatefulRepository(() =>
		instantiatePostPreviewRepositoryModel(postPreviewAPI)
	);

	return (
		<SiteSection
			model={instantiateReadonlyModel({
				id: "blog",
				sectionName: "blog",
				sectionTitle: sectionTitle,
			})}
		>
			<SiteSubsection
				model={instantiateReadonlyModel({
					id: "featured-post",
					subsectionTitle: "Featured Post",
				})}
			>
				<FeaturedPostPreviewPlaceholder
					model={{
						modelView: {
							featuredPostPreviewModel:
								repositoryModelView?.featuredPostPreviewModel,
						},
					}}
				/>
			</SiteSubsection>
			<SiteSubsection
				model={instantiateReadonlyModel({
					id: "recent-posts",
					subsectionTitle: "Recent Posts",
				})}
			>
				<GridContainer
					model={instantiateReadonlyModel({
						maxXorY: 3,
						orientation: "horizontal",
						overflow: true,
					})}
				>
					<RecentPostPreviewsPlaceholder
						model={instantiateReadonlyModel({
							recentPostPreviewModels:
								repositoryModelView?.recentPostPreviewModels,
						})}
					/>
				</GridContainer>
			</SiteSubsection>
			<a href={blogURL.href} className="view-more">
				View More
			</a>
		</SiteSection>
	);
} as ModeledVoidComponent<BlogSectionModel>;

export default BlogSection;
