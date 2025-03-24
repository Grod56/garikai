"use client";
import siteSectionModelInstantiator from "./components/widgets/site-section/SiteSectionModel";
import carouselModelInstantiator from "./components/widgets/carousel/CarouselModel";
import comingSoonBannerModelInstantiator from "./components/widgets/coming-soon-banner/ComingSoonBannerModel";
import imageCardSkeletonModelInstantiator from "./components/widgets/image-card-skeleton/ImageCardSkeletonModel";
import siteSubsectionModelInstantiator from "./components/widgets/site-section/site-subsection/SiteSubsectionModel";
import gridContainerModelInstantiator from "./components/widgets/grid-container/GridContainerModel";
import mainModelInstantiator from "./components/sections/main/MainModel";
import ArtImage from "./components/widgets/art-image/ArtImage";
import BookPreview from "./components/widgets/book-preview/BookPreview";
import Carousel from "./components/widgets/carousel/Carousel";
import ComingSoonBanner from "./components/widgets/coming-soon-banner/ComingSoonBanner";
import GridContainer from "./components/widgets/grid-container/GridContainer";
import ImageCardSkeleton from "./components/widgets/image-card-skeleton/ImageCardSkeleton";
import PostPreview from "./components/widgets/post-preview/PostPreview";
import SiteSubsection from "./components/widgets/site-section/site-subsection/SiteSubsection";
import SiteSection from "./components/widgets/site-section/SiteSection";
import { useArtImageRepository } from "./repositories/ArtImageRepository";
import { useBookPreviewRepository } from "./repositories/BookPreviewRepository";
import { usePostPreviewRepository } from "./repositories/PostPreviewRepository";
import Main from "./components/sections/main/Main";

export default function Page() {
	const [focalPost, latestPosts] = usePostPreviewRepository();
	const bookPreviews = useBookPreviewRepository();
	const artImages = useArtImageRepository();

	return (
		<Main
			mainModelInstance={mainModelInstantiator.instantiate({
				id: "home",
				name: "home",
			})}
		>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{ id: "bio", sectionName: "bio", sectionTitle: "Bio" }
				)}
			>
				<p>
					Welcome! This place is the nexus of all of my interests,
					hobbies, projects, and professional undertakings. Feel free
					to check out what interests you. You can get in touch with
					me through my{" "}
					<a href="#contact-details">email and socials</a> for
					professional inquiries or even just for personal questions
					and discussions. I guess I'll just go ahead and "summarize"
					myself.
				</p>
				<p>
					My name is Garikai Rodney Gumbo, I'm an Electrical
					Engineering student by day, and a software coder by night.
					Besides these areas of <i>expertise</i>, I am also
					interested in pencil drawing, cursive calligraphy, classical
					literature, biblical symbolism, Orthodox iconography,
					patristics... among other things.
				</p>
				<p>
					You may check out what else I'm thinking about or currently
					studying in detail from my{" "}
					<a href="#reading-list">reading list</a>. If I stumble upon
					something particularly interesting, insightful, or
					compelling, I'll probably jot something down on it on my{" "}
					<a href="#blog">blog</a>.
				</p>
				<p>
					That's it from me, thank you again for stopping by and happy
					scrolling!
				</p>
			</SiteSection>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{
						id: "portfolio",
						sectionName: "portfolio",
						sectionTitle: "Portfolio",
					}
				)}
			>
				<ComingSoonBanner
					comingSoonBannerModelInstance={comingSoonBannerModelInstantiator.instantiate(
						{
							id: "portfolio-coming-soon-banner",
							bannerText: "Coming Soon",
						}
					)}
				/>
			</SiteSection>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{
						id: "art",
						sectionName: "art",
						sectionTitle: "Art",
					}
				)}
			>
				<Carousel
					carouselModelInstance={carouselModelInstantiator.instantiate(
						{ id: "art-image-carousel" }
					)}
				>
					{artImages
						? artImages.map((artImage) => (
								<ArtImage
									key={artImage.id}
									artImageModelInstance={artImage}
								/>
							))
						: Array(6)
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
													id: `art-image-skeleton_${index}`, //TODO: Sloppy
												}
											)}
										/>
									)
								)}
				</Carousel>
			</SiteSection>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{ id: "blog", sectionName: "blog", sectionTitle: "Blog" }
				)}
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
				{/* // TODO: Work to do here again */}
				<a
					href="https://garikairodney.blogspot.com"
					className="view-more"
				>
					View More
				</a>
			</SiteSection>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{
						id: "reading-list",
						sectionName: "reading-list",
						sectionTitle: "Reading List",
					}
				)}
			>
				<p>
					Collection of material that has greatly influenced the way I
					think—together with stuff I'm currently working on. Will
					probably split these into their appropriate categories for
					clarity in the near future.
				</p>
				<GridContainer
					gridContainerModelInstance={gridContainerModelInstantiator.instantiate(
						{
							id: "reading-list-grid-container",
							maxXorY: 2,
							orientation: "horizontal",
							isOverflow: false,
						}
					)}
				>
					{bookPreviews
						? bookPreviews.map((bookPreview) => (
								<BookPreview
									key={bookPreview.id}
									bookPreviewModelInstance={bookPreview}
								/>
							))
						: Array(6)
								.fill(1)
								.map((_, index) => (
									<ImageCardSkeleton
										key={index}
										imageCardSkeletonModelInstance={imageCardSkeletonModelInstantiator.instantiate(
											{
												id: `reading-list-skeleton_${index}`,
											}
										)}
									/>
								))}
				</GridContainer>
			</SiteSection>
			<SiteSection
				siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
					{
						id: "contact-details",
						sectionName: "contact-details",
						sectionTitle: "Contact Details",
					}
				)}
			>
				<p>
					For professional inquiries, shoot me an email @{" "}
					<a href="mailto:providenceuniversalstudios@gmail.com">
						providenceuniversalstudios@gmail.com
					</a>
					. You may also reach out to me on{" "}
					<a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">
						Whatsapp
					</a>
					. If perhaps something piqued your interest here, or maybe
					even annoyed you (I take it all in spades I promise 😤), my
					personal email is right{" "}
					<a href="mailto:rodneygaryx29@gmail.com">here</a>. The rest
					of my socials are down in the <a href="#footer">footer</a>.
				</p>
			</SiteSection>
		</Main>
	);
}
