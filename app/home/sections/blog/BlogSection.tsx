import SiteSection from "@/app/components/content/site-section/SiteSection";
import GridContainer from "@/app/components/widgets/grid-container/GridContainer";
import ImageCardSkeleton from "@/app/components/widgets/image-card-skeleton/ImageCardSkeleton";
import PostPreview from "@/app/components/content/post-preview/PostPreview";
import SiteSubsection from "@/app/components/content/site-section/site-subsection/SiteSubsection";
import { usePostPreviewRepository } from "@/app/repositories/PostPreviewRepository";
import { useSiteSectionModel } from "@/app/components/content/site-section/SiteSectionModel";
import { useSiteSubsectionModel } from "@/app/components/content/site-section/site-subsection/SiteSubsectionModel";
import { useImageCardSkeletonModel } from "@/app/components/widgets/image-card-skeleton/ImageCardSkeletonModel";
import { useGridContainerModel } from "@/app/components/widgets/grid-container/GridContainerModel";

export default function BlogSection() {
	const siteSectionModel = useSiteSectionModel("blog", "blog", "Blog");
	const latestPostSubsectionModel = useSiteSubsectionModel(
		"latest-post",
		"Latest Post"
	);
	const recentPostsSubsectionModel = useSiteSubsectionModel(
		"recent-posts",
		"Recent Posts"
	);
	const { focalPost, latestPosts } = usePostPreviewRepository();
	const recentPostsGridContainer = useGridContainerModel(
		3,
		"horizontal",
		true
	);

	return (
		<SiteSection model={siteSectionModel}>
			<SiteSubsection model={latestPostSubsectionModel}>
				{focalPost ? (
					<PostPreview model={focalPost} />
				) : (
					<ImageCardSkeleton
						model={useImageCardSkeletonModel("flexible")}
					/>
				)}
			</SiteSubsection>
			<SiteSubsection model={recentPostsSubsectionModel}>
				<GridContainer model={recentPostsGridContainer}>
					{latestPosts
						? latestPosts.map((latestPost) => (
								<PostPreview
									key={latestPost.modelInstance.id}
									model={latestPost}
								/>
							))
						: Array(3)
								.fill(1)
								.map(
									(
										_,
										index // TODO: gridContainer model columns here
									) => (
										<ImageCardSkeleton
											key={index}
											model={useImageCardSkeletonModel(
												"vertical"
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
