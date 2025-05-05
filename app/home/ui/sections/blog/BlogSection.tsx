import FeaturedPostPreview from "@/app-library/components/content/post-preview/ui/FeaturedPostPreview";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { ModeledEmptyComponent } from "@/app-library/custom-types/ModeledComponent";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";
import { BlogSectionModel } from "./BlogSectionModel";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/GridContainerModelInstantiator";
import { instantiateSiteSubsectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSubsectionModelInstantiator";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";

const BlogSection = function ({ model }) {
	const {
		sectionTitle,
		postPreviewRepositoryModel: repositoryModel,
		blogURL,
	} = model.modelView;
	const { modelView: repositoryModelView } = repositoryModel;

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
				{repositoryModelView ? (
					<FeaturedPostPreview
						model={repositoryModelView.featuredPostPreviewModel}
					/>
				) : (
					<ImageCardSkeleton
						model={instantiateImageCardSkeletonModel({
							orientation: "flexible",
						})}
					/>
				)}
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
					{repositoryModelView
						? repositoryModelView.recentPostPreviewModels.map(
								(recentPostPreviewModel) => (
									<PostPreview
										key={
											recentPostPreviewModel.modelView.id
										}
										model={recentPostPreviewModel}
									/>
								)
							)
						: Array(3)
								.fill(1)
								.map(
									(
										_,
										index // TODO: gridContainer model columns here
									) => (
										<ImageCardSkeleton
											key={index}
											model={instantiateImageCardSkeletonModel(
												{
													orientation: "vertical",
												}
											)}
										/>
									)
								)}
				</GridContainer>
			</SiteSubsection>
			<a href={blogURL.href} className="view-more">
				View More
			</a>
		</SiteSection>
	);
} as ModeledEmptyComponent<BlogSectionModel>;

export default BlogSection;
