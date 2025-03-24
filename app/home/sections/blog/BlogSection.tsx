import siteSectionModelInstantiator from "@/app/components/widgets/site-section/SiteSectionModel";
import SiteSection from "@/app/components/widgets/site-section/SiteSection";
import GridContainer from "@/app/components/widgets/grid-container/GridContainer";
import ImageCardSkeleton from "@/app/components/widgets/image-card-skeleton/ImageCardSkeleton";
import PostPreview from "@/app/components/widgets/post-preview/PostPreview";
import SiteSubsection from "@/app/components/widgets/site-section/site-subsection/SiteSubsection";
import siteSubsectionModelInstantiator from "@/app/components/widgets/site-section/site-subsection/SiteSubsectionModel";
import imageCardSkeletonModelInstantiator from "@/app/components/widgets/image-card-skeleton/ImageCardSkeletonModel";
import gridContainerModelInstantiator from "@/app/components/widgets/grid-container/GridContainerModel";
import { usePostPreviewRepository } from "@/app/repositories/PostPreviewRepository";

export default function BlogSection() {
	const [focalPost, latestPosts] = usePostPreviewRepository();

	return (
		<SiteSection
			siteSectionModelInstance={siteSectionModelInstantiator.instantiate({
				id: "blog",
				sectionName: "blog",
				sectionTitle: "Blog",
			})}
		>
			<SiteSubsection
				siteSubsectionModelInstance={siteSubsectionModelInstantiator.instantiate(
					{ id: "latest-post", subsectionTitle: "Latest Post" }
				)}
			>
				{focalPost ? (
					<PostPreview postPreviewModelInstance={focalPost} />
				) : (
					<ImageCardSkeleton
						imageCardSkeletonModelInstance={imageCardSkeletonModelInstantiator.instantiate(
							{ id: "focal-post-skeleton" }
						)}
					/>
				)}
			</SiteSubsection>
			<SiteSubsection
				siteSubsectionModelInstance={siteSubsectionModelInstantiator.instantiate(
					{ id: "recent-posts", subsectionTitle: "Recent Posts" }
				)}
			>
				<GridContainer
					gridContainerModelInstance={gridContainerModelInstantiator.instantiate(
						{
							id: "recent-posts-grid-container",
							maxXorY: 3,
							orientation: "horizontal",
							isOverflow: true,
						}
					)}
				>
					{latestPosts
						? latestPosts.map((latestPost) => (
								<PostPreview
									key={latestPost.id}
									postPreviewModelInstance={latestPost}
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
											imageCardSkeletonModelInstance={imageCardSkeletonModelInstantiator.instantiate(
												{
													id: `recent-post-skeleton_${index}`,
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
