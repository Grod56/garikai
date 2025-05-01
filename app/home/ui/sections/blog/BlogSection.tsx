import FeaturedPostPreview from "@/app-library/components/content/post-preview/ui/FeaturedPostPreview";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import { instantiateSiteSectionModel } from "@/app-library/default-implementations/model-instantiators/site-section/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateSiteSubsectionModel } from "@/app-library/default-implementations/model-instantiators/site-subsection/SiteSubsectionModelInstantiator";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import { instantiateGridContainerModel } from "@/app-library/default-implementations/model-instantiators/grid-container/GridContainerModelInstantiator";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import { instantiateImageCardSkeletonModel } from "@/app-library/default-implementations/model-instantiators/image-card-skeleton/ImageCardSkeletonModelInstantiator";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { instantiateBloggerPostPreviewAPI } from "@/app-library/default-implementations/content-repositories/post-preview/PostPreviewAPIInstantiator";
import { instantiatePostPreviewRepositoryModel } from "@/app-library/default-implementations/content-repositories/post-preview/PostPreviewRepositoryModelInstantiator";
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
	const { modelInstance: repositoryModelInstance } = useRepository(() =>
		instantiatePostPreviewRepositoryModel(
			instantiateBloggerPostPreviewAPI()
		)
	);

	return (
		<SiteSection model={siteSectionModel}>
			<SiteSubsection model={feauterdPostSubsectionModel}>
				{repositoryModelInstance ? (
					<FeaturedPostPreview
						model={repositoryModelInstance.featuredPostPreviewModel}
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
					{repositoryModelInstance
						? repositoryModelInstance.recentPostPreviewModels.map(
								(recentPostPreviewModel) => (
									<PostPreview
										key={
											recentPostPreviewModel.modelInstance
												.id
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
