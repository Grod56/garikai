'use client'

import ArtImage from "../component/content/ArtImage/ArtImage";
import { useArtImageRepository } from "../component/content/ArtImage/useArtImageRepository";
import BookPreview from "../component/content/BookPreview/BookPreview";
import { useBookPreviewRepository } from "../component/content/BookPreview/useBookPreviewRepository";
import FocalPost from "../component/content/PostPreview/FocalPost/FocalPost";
import NormalPost from "../component/content/PostPreview/NormalPost/NormalPost";
import { usePostPreviewRepository } from "../component/content/PostPreview/usePostPreviewRepository";
import Carousel from "../component/widget/Carousel/Carousel";
import { CarouselModel } from "../component/widget/Carousel/CarouselModel";
import ComingSoonBanner from "../component/widget/ComingSoonBanner/ComingSoonBanner";
import { ComingSoonBannerModel } from "../component/widget/ComingSoonBanner/ComingSoonBannerModel";
import FlexibleContainer from "../component/widget/FlexibleContainer/FlexibleContainer";
import { FlexibleContainerModel } from "../component/widget/FlexibleContainer/FlexibleContainerModel";
import GridContainer from "../component/widget/GridContainer/GridContainer";
import { GridContainerModel } from "../component/widget/GridContainer/GridContainerModel";
import ImageCardSkeleton from "../component/widget/ImageCard/ImageCardSkeleton";
import { ImageCardSkeletonModel } from "../component/widget/ImageCard/ImageCardSkeletonModel";
import SiteSection from "../component/widget/SiteSection/SiteSection";
import { SiteSectionModel } from "../component/widget/SiteSection/SiteSectionModel";
import SiteSubsection from "../component/widget/SiteSection/SiteSubsection/SiteSubsection";
import { SiteSubsectionModel } from "../component/widget/SiteSection/SiteSubsection/SiteSubsectionModel";
import Content from "../Content";

export default function Home(

) {
    const [focalPost, latestPosts] = usePostPreviewRepository(
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=1"),
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3"),
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3")
    )

    const bookPreviews = useBookPreviewRepository();
    const artImages = useArtImageRepository();

    return (
        <Content className={'home'}>
            <SiteSection siteSectionModel={new SiteSectionModel('bio','bio','Bio')}>
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
            <SiteSection siteSectionModel={new SiteSectionModel('portfolio', 'portfolio', 'Portfolio')}>
                <ComingSoonBanner comingSoonBannerModel={new ComingSoonBannerModel('Coming Soon')} />
            </SiteSection>
            <SiteSection siteSectionModel={new SiteSectionModel(
                'art',
                'art',
                'Art'
            )}>
                <Carousel carouselModel={new CarouselModel()}>
                    {
                        artImages
                        ? artImages.map((artImage) => <ArtImage key={artImage.id} artImageModel={artImage} />)
                        : Array(6).fill(1).map((_, index) => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton key={index} imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                        )
                    }
                </Carousel>
            </SiteSection>
            <SiteSection siteSectionModel={new SiteSectionModel('blog','blog','Blog')}>
                <SiteSubsection siteSubsectionModel={new SiteSubsectionModel('Latest Post')}>
                    {
                        focalPost ? <FocalPost
                            focalPostModel={focalPost}
                        />
                        : <ImageCardSkeleton imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                    }
                </SiteSubsection>
                <SiteSubsection siteSubsectionModel={new SiteSubsectionModel('Recent Posts')}>
                    <GridContainer gridContainerModel={new GridContainerModel(3, true, true)}>
                    {
                        latestPosts
                        ? latestPosts.map(
                            (latestPost) => <NormalPost key={latestPost.id} normalPostModel={latestPost} />
                        )
                        : Array(3).fill(1).map((_, index) => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton key={index} imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                        )
                    }
                    </GridContainer>
                </SiteSubsection>
                {/* // TODO: Work to do here again */}
                <a href="https://garikairodney.blogspot.com" className="view-more">View More</a>
            </SiteSection>
            <SiteSection siteSectionModel={new SiteSectionModel('reading-list','reading-list','Reading List')}>
                <p>Collection of material that has greatly influenced the way I think—together with stuff I'm currently working on. Will probably split these into their appropriate categories for clarity in the near future.</p>
                <GridContainer gridContainerModel={new GridContainerModel(2, true, false)}>
                    {
                        bookPreviews
                        ? bookPreviews.map((bookPreview) => <BookPreview key={bookPreview.id} bookPreviewModel={bookPreview} />)
                        : Array(6).fill(1).map((_, index) => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton key={index} imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                        )
                    }
                </GridContainer>
            </SiteSection>
            <SiteSection
                siteSectionModel={new SiteSectionModel(
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
        </Content>
    );
}