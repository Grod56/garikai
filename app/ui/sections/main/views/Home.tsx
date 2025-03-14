'use client'

import ArtImage from "../components/content/ArtImage/ArtImage";
import { ArtImageModelInstantiator, ArtImageModelInstantiatorIncarnationImplementation } from "../components/content/ArtImage/ArtImageModel";
import { useArtImageRepository } from "../components/content/ArtImage/useArtImageRepository";
import BookPreview from "../components/content/BookPreview/BookPreview";
import { BookPreviewModelInstantiator, BookPreviewModelInstantiatorIncarnationImplementation } from "../components/content/BookPreview/BookPreviewModel";
import { useBookPreviewRepository } from "../components/content/BookPreview/useBookPreviewRepository";
import PostPreview from "../components/content/PostPreview/PostPreview";
import { PostPreviewModelInstantiator, PostPreviewModelInstantiatorIncarnationImplementation } from "../components/content/PostPreview/PostPreviewModel";
import { usePostPreviewRepository } from "../components/content/PostPreview/usePostPreviewRepository";
import Carousel from "../components/widgets/Carousel/Carousel";
import { CarouselModelInstantiator, CarouselModelInstantiatorIncarnationImplementation } from "../components/widgets/Carousel/CarouselModel";
import ComingSoonBanner from "../components/widgets/ComingSoonBanner/ComingSoonBanner";
import { ComingSoonBannerModelInstantiator, ComingSoonBannerModelInstantiatorIncarnationImplementation } from "../components/widgets/ComingSoonBanner/ComingSoonBannerModel";
import GridContainer from "../components/widgets/GridContainer/GridContainer";
import { GridContainerModelInstantiator, GridContainerModelInstantiatorIncarnationImplementation } from "../components/widgets/GridContainer/GridContainerModel";
import ImageCardSkeleton from "../components/widgets/ImageCard/ImageCardSkeleton";
import { ImageCardSkeletonModelInstantiator, ImageCardSkeletonModelInstantiatorIncarnationImplementation } from "../components/widgets/ImageCard/ImageCardSkeletonModel";
import SiteSection from "../components/widgets/SiteSection/SiteSection";
import { SiteSectionModelInstantiator, SiteSectionModelInstantiatorIncarnationImplementation } from "../components/widgets/SiteSection/SiteSectionModel";
import SiteSubsection from "../components/widgets/SiteSection/SiteSubsection/SiteSubsection";
import * as SiteSubsectionModel from "../components/widgets/SiteSection/SiteSubsection/SiteSubsectionModel";
import Main from "../Main";
import { HomeModelInstance, parseJSONToModelInstance } from "./HomeModel";


export default function Home(
    {
        homeModelInstance
    }:
    {
        homeModelInstance: HomeModelInstance
    }
) {

    const parsedHomeModelInstance: HomeModelInstance = parseJSONToModelInstance(homeModelInstance);

    const postPreviewEndpoint = parsedHomeModelInstance.postPreviewEndpoint;
    const siteSectionModelInstantiator = parsedHomeModelInstance.siteSectionModelInstantiator;
    const carouselModelInstantiator = parsedHomeModelInstance.carouselModelInstantiator;
    const imageCardSkeletonModelInstantiator = parsedHomeModelInstance.imageCardSkeletonModelInstantiator;
    const siteSubsectionModelInstantiator = parsedHomeModelInstance.siteSubsectionModelInstantiator;
    const gridContainerModelInstantiator = parsedHomeModelInstance.gridContainerModelInstantiator;
    const comingSoonBannerModelInstantiator = parsedHomeModelInstance.comingSoonBannerModelInstantiator;
    const postPreviewModelInstantiator = parsedHomeModelInstance.postPreviewModelInstantiator;
    const bookPreviewModelInstantiator = parsedHomeModelInstance.bookPreviewModelInstantiator;
    const artImageModelInstantiator = parsedHomeModelInstance.artImageModelInstantiator;

    const [focalPost, latestPosts] = usePostPreviewRepository(
        postPreviewEndpoint,
        postPreviewModelInstantiator
    );
    const bookPreviews = useBookPreviewRepository(
        bookPreviewModelInstantiator
    );
    const artImages = useArtImageRepository(
        artImageModelInstantiator
    );

    return (
        <Main mainModelInstance={parsedHomeModelInstance}>
            <SiteSection siteSectionModelInstance={siteSectionModelInstantiator.instantiate('bio','bio','Bio')}>
                <p>
                    Welcome! This place is the nexus of all of my interests, hobbies, projects,
                    and professional undertakings. Feel free to check out what interests you.
                    You can get in touch with me through my <a href="#contact-details">email and socials</a> for professional inquiries or even just for personal questions and discussions.
                    I guess I'll just go ahead and "summarize" myself.
                </p>
                <p>
                    My name is Garikai Rodney Gumbo, I'm an Electrical Engineering student by day,
                    and a software coder by night. Besides these areas of <i>expertise</i>, I am also interested in
                    pencil drawing, cursive calligraphy, classical literature, biblical symbolism,
                    Orthodox iconography, patristics... among other things.
                </p>
                <p>
                    You may check out what else I'm thinking about or currently studying in detail from my <a href="#reading-list">reading list</a>. If I stumble upon something particularly
                    interesting, insightful, or compelling, I'll probably jot something down on it on my <a href="">blog</a>.</p>
                <p>
                That's it from me, thank you again for stopping by and happy scrolling!
                </p>
            </SiteSection>
            <SiteSection siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
                'portfolio',
                'portfolio',
                'Portfolio'
            )}>
                <ComingSoonBanner comingSoonBannerModelInstance={
                    comingSoonBannerModelInstantiator.instantiate('portfolio-coming-soon-banner', 'Coming Soon')
                } />
            </SiteSection>
            <SiteSection siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
                'art',
                'art',
                'Art'
            )}>
                <Carousel carouselModelInstance={carouselModelInstantiator.instantiate('art-image-carousel')}>
                    {
                        artImages
                        ? artImages.map((artImage) => <ArtImage key={artImage.id} artImageModelInstance={artImage} />)
                        : Array(6).fill(1).map((_, index) => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton 
                                key={index}
                                imageCardSkeletonModelInstance={
                                    imageCardSkeletonModelInstantiator.instantiate(
                                        `art-image-skeleton_${index}` //TODO: Sloppy
                                    )
                                }
                            /> 
                        )
                    }
                </Carousel>
            </SiteSection>
            <SiteSection siteSectionModelInstance={siteSectionModelInstantiator.instantiate('blog','blog','Blog')}>
                <SiteSubsection siteSubsectionModelInstance={
                    siteSubsectionModelInstantiator.instantiate('latest-post', 'Latest Post')
                }>
                    {
                        focalPost ? <PostPreview
                            postPreviewModelInstance={focalPost}
                        />
                        : <ImageCardSkeleton imageCardSkeletonModelInstance={
                            imageCardSkeletonModelInstantiator.instantiate('focal-post-skeleton')}
                        />
                    }
                </SiteSubsection>
                <SiteSubsection siteSubsectionModelInstance={
                    siteSubsectionModelInstantiator.instantiate('recent-posts','Recent Posts')}
                >
                    <GridContainer gridContainerModelInstance={
                        gridContainerModelInstantiator.instantiate(
                            'recent-posts-grid-container', 3, 'horizontal', true
                        )}
                    >
                    {
                        latestPosts
                        ? latestPosts.map((latestPost) => (
                                <PostPreview key={latestPost.id} postPreviewModelInstance={latestPost} />
                        ))
                        : Array(3).fill(1).map((_, index) => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton 
                                key={index}
                                imageCardSkeletonModelInstance={
                                    imageCardSkeletonModelInstantiator.instantiate(`recent-post-skeleton_${index}`)
                                }
                            />
                        )
                    }
                    </GridContainer>
                </SiteSubsection>
                {/* // TODO: Work to do here again */}
                <a href="https://garikairodney.blogspot.com" className="view-more">View More</a>
            </SiteSection>
            <SiteSection siteSectionModelInstance={
                siteSectionModelInstantiator.instantiate('reading-list','reading-list','Reading List')
            }>
                <p>Collection of material that has greatly influenced the way I think—together with stuff I'm currently working on. Will probably split these into their appropriate categories for clarity in the near future.</p>
                <GridContainer gridContainerModelInstance={
                    gridContainerModelInstantiator.instantiate(
                        'reading-list-grid-container', 2, 'horizontal', false
                    )
                }>
                    {
                        bookPreviews
                        ? bookPreviews.map((bookPreview) => (
                            <BookPreview key={bookPreview.id} bookPreviewModelInstance={bookPreview} />
                        ))
                        : Array(6).fill(1).map((_, index) => (
                            <ImageCardSkeleton 
                                key={index}
                                imageCardSkeletonModelInstance={
                                    imageCardSkeletonModelInstantiator.instantiate(
                                        `reading-list-skeleton_${index}`
                                    )
                                }
                            />
                        ))
                    }
                </GridContainer>
            </SiteSection>
            <SiteSection
                siteSectionModelInstance={siteSectionModelInstantiator.instantiate(
                    'contact-details',
                    'contact-details',
                    'Contact Details'
                )}
                bottomRule={false}
            >
                <p>
                    For professional inquiries, shoot me an email @ <a href="mailto:providenceuniversalstudios@gmail.com">providenceuniversalstudios@gmail.com</a>. You may also reach out to me on <a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">Whatsapp</a>.
                    If perhaps something piqued your interest here, or maybe even annoyed you (I take it all in spades I promise 😤), my personal email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>. The rest of my socials are down in the <a href="#footer">footer</a>.
                </p>
            </SiteSection>
        </Main>
    );
}