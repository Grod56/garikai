import FeaturedPostPreview from "@/app-library/components/content/post-preview/ui/FeaturedPostPreview";
import PostPreview from "@/app-library/components/content/post-preview/ui/PostPreview";
import { instantiateSiteSectionModel } from "@/app-library/components/content/site-section/model-instantiator/SiteSectionModelInstantiator";
import SiteSection from "@/app-library/components/content/site-section/ui/SiteSection";
import { instantiateSiteSubsectionModel } from "@/app-library/components/content/site-subsection/model-instantiator/SiteSubsectionModelInstantiator";
import SiteSubsection from "@/app-library/components/content/site-subsection/ui/SiteSubsection";
import { instantiateGridContainerModel } from "@/app-library/components/widgets/grid-container/model-instantiator/GridContainerModelInstantiator";
import GridContainer from "@/app-library/components/widgets/grid-container/ui/GridContainer";
import { instantiateImageCardSkeletonModel } from "@/app-library/components/widgets/image-card-skeleton/model-instantiator/ImageCardSkeletonModelInstantiator";
import ImageCardSkeleton from "@/app-library/components/widgets/image-card-skeleton/ui/ImageCardSkeleton";
import { getBloggerPostPreviewAPI } from "@/app-library/content-repositories/post-preview/default-instantiator/PostPreviewAPIInstantiator";
import { instantiatePostPreviewRepository } from "@/app-library/content-repositories/post-preview/default-instantiator/PostPreviewRepositoryModelInstantiator";
import { useMemoizedInteractiveModel } from "@/app-library/utilities/model-transformer";
import { useEffect } from "react";

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
	const { modelInstance, interact } = useMemoizedInteractiveModel(
		instantiatePostPreviewRepository(getBloggerPostPreviewAPI())
	);
	const recentPostsGridContainer = instantiateGridContainerModel({
		maxXorY: 3,
		orientation: "horizontal",
		overflow: true,
	});

	useEffect(() => {
		interact({ interactionName: "RETRIEVE_MODELS" });
	}, [interact]);

	return (
		<SiteSection model={siteSectionModel}>
			<SiteSubsection model={feauterdPostSubsectionModel}>
				{modelInstance ? (
					<FeaturedPostPreview
						model={modelInstance.featuredPostPreviewModel}
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
					{modelInstance
						? modelInstance.recentPostPreviewModels.map(
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
			<a href={process.env.NEXT_PUBLIC_BLOG_URL} className="view-more">
				View More
			</a>
		</SiteSection>
	);
}
