import FeaturedPostPreview from "@/app-library/components/content/post-preview/ui/FeaturedPostPreview";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateSiteSubsectionModel } from "@/app-library/default-implementations/model-instantiators/SiteSubsectionModelInstantiator";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/GridContainerModelInstantiator";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/ImageCardSkeletonModelInstantiator";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { instantiateBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-apis/PostPreviewAPIInstantiator";
import { instantiatePostPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/PostPreviewRepositoryModelInstantiator";
import { useRepository } from "@/app-library/utilities/use-repository";

export default function BlogSection() {
	const siteSectionModel = instantiateSiteSectionModel({
		id: "blog",
		sectionName: "blog",
		sectionTitle: "Blog",
	});
	const feauterdPostSubsectionModel = instantiateSiteSubsectionModel({
		id: "featured-post",
		subsectionTitle: "Featured Post",
	});
	const recentPostsSubsectionModel = instantiateSiteSubsectionModel({
		id: "recent-posts",
		subsectionTitle: "Recent Posts",
	});
	const recentPostsGridContainer = instantiateGridContainerModel({
		maxXorY: 3,
		orientation: "horizontal",
		overflow: true,
	});
	const { modelView: repositoryModelView } = useRepository(() =>
		instantiatePostPreviewRepositoryModel(
			instantiateBloggerPostPreviewAPI()
		)
	);

	return (
		<SiteSection model={siteSectionModel}>
			<SiteSubsection model={feauterdPostSubsectionModel}>
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
			<SiteSubsection model={recentPostsSubsectionModel}>
				<GridContainer model={recentPostsGridContainer}>
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
			<a href={process.env.NEXT_PUBLIC_BLOG_URL!} className="view-more">
				View More
			</a>
		</SiteSection>
	);
}
