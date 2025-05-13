import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import GridContainer from "@/app-library/components/widget/grid-container/ui/GridContainer";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/GridContainerModelInstantiator";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";
import { instantiateSiteSubsectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSubsectionModelInstantiator";
import FeaturedPostPreviewPlaceholder from "@/app/home/ui/sections/blog/featured-post-preview-placeholder/FeaturedPostPreviewPlaceholder";
import { BlogSectionModel } from "./BlogSectionModel";
import RecentPostPreviewsPlaceholder from "./recent-posts-placeholder/RecentPostPreviewsPlaceholder";

const BlogSection = function ({ model }) {
	const { sectionTitle, postPreviewRepositoryModel, blogURL } =
		model.modelView;
	const { modelView: repositoryModelView } = postPreviewRepositoryModel;

	return (
		<SiteSection
			model={instantiateSiteSectionModel({
				id: "blog",
				sectionName: "blog",
				sectionTitle: sectionTitle,
			})}
		>
			<SiteSubsection
				model={instantiateSiteSubsectionModel({
					id: "featured-post",
					subsectionTitle: "Featured Post",
				})}
			>
				<FeaturedPostPreviewPlaceholder
					model={{
						modelView: {
							placeholderedFeaturedPostPreviewModel:
								repositoryModelView?.featuredPostPreviewModel,
						},
					}}
				/>
			</SiteSubsection>
			<SiteSubsection
				model={instantiateSiteSubsectionModel({
					id: "recent-posts",
					subsectionTitle: "Recent Posts",
				})}
			>
				<GridContainer
					model={instantiateGridContainerModel({
						maxXorY: 3,
						orientation: "horizontal",
						overflow: true,
					})}
				>
					<RecentPostPreviewsPlaceholder
						model={{
							modelView: {
								placeholderedRecentPostPreviewModels:
									repositoryModelView?.recentPostPreviewModels,
							},
						}}
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
