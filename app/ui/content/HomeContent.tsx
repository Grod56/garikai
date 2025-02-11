'use client'

import SiteSection from '../../components/SiteSection/SiteSection';
import Content from './Content';
import ComingSoonBanner from '../../components/ComingSoonBanner/ComingSoonBanner';
import SiteSubsection from '../../components/SiteSubsection/SiteSubsection';
import FlexibleContainer from '../../components/FlexibleContainer/FlexibleContainer';
import Carousel from '../../components/Carousel/Carousel';
import FocalPost from '../../components/FocalPost/FocalPost';
import NormalPost from '../../components/NormalPost/NormalPost';
import BookPreview from '../../components/BookPreview/BookPreview';
import GridContainer from '../../components/GridContainer/GridContainer';
import { SiteSectionModel } from '@/app/components/SiteSection/SiteSectionModel';
import { ComingSoonBannerModel } from '@/app/components/ComingSoonBanner/ComingSoonBannerModel';
import { SiteSubsectionModel } from '@/app/components/SiteSubsection/SiteSubsectionModel';
import { GridContainerModel } from '@/app/components/GridContainer/GridContainerModel';
import { FlexibleContainerModel } from '@/app/components/FlexibleContainer/FlexibleContainerModel';
import { BookPreviewModel } from '@/app/components/BookPreview/BookPreviewModel';
import { usePostPreviewRepository } from '@/app/components/PostPreview/usePostPreviewRepository';
import ImageCardSkeleton from '@/app/components/ImageCard/ImageCardSkeleton';
import { ImageCardSkeletonModel } from '@/app/components/ImageCard/ImageCardSkeletonModel';
import { useBookPreviewRepository } from '@/app/components/BookPreview/useBookPreviewRepository';
import { useArtImageRepository } from '@/app/components/ArtImage/useArtImageRepository';
import { CarouselModel } from '@/app/components/Carousel/CarouselModel';

export default function HomeContent(

) {
    const [focalPost, latestPosts] = usePostPreviewRepository(
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=1"),
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3"),
        new URL("https://www.googleapis.com/blogger/v3/blogs/5898866324901103466/posts?key=AIzaSyAYna19D_n2GTUDrowo0s2MVpm2JTluMK8&fetchImages=true&maxResults=3")
    )

    const bookPreviews = useBookPreviewRepository();
    // const artImages = useArtImageRepository();



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
                    and a software coder by night (weird way of putting it, but okay).
                    Besides these areas of <i>expertise</i>, I am also interested in
                    pencil drawing, cursive calligraphy, classical literature, biblical symbolism,
                    Orthodox iconography, patristics ... among other things. My musical favorites
                    span everything from sacred choral music to random amapiano, pop and phonk beats
                    I find on Tiktok, so that's as much detail as I'll go into with that (more the
                    former than the latter, for better or for worse).</p>
                <p>
                    You may check out what else I'm working on or currently studying in detail from my <a href="#reading-list">reading list</a>. If I stumble upon something particularly
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
                    <img className="art-image" src="/resources/images/art/20200301_121452_proc.jpg"/>
                    <img className="art-image" src="/resources/images/art/20170205_141619.jpg"/>
                    <img className="art-image" src="/resources/images/art/20180421_175359~2.jpg"/>
                    <img className="art-image" src="/resources/images/art/IMG_20200108_175637_605.jpg"/>
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
                        : Array(3).fill(1).map(() => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton key={Math.random()} imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                        )
                    }
                    </GridContainer>
                </SiteSubsection>
                {/* // TODO: Work to do here again */}
                <a href="https://garikairodney.blogspot.com" className="view-more">View More</a>
            </SiteSection>
            <SiteSection siteSectionModel={new SiteSectionModel('reading-list','reading-list','Reading List')}>
                <p>A mixed bag of books that have greatly influenced the way I think and books I'm currently reading through. Will probably split these into their appropriate categories for clarity in the near future.</p>
                <FlexibleContainer flexibleContainerModel={new FlexibleContainerModel()}>
                    {
                        bookPreviews
                        ? bookPreviews.map((bookPreview) => <BookPreview key={bookPreview.id} bookPreviewModel={bookPreview} />)
                        : Array(6).fill(1).map(() => // TODO: gridContainer model columns here 
                            <ImageCardSkeleton key={Math.random()} imageCardSkeletonModel={new ImageCardSkeletonModel()} />
                        )
                    }
                </FlexibleContainer>
            </SiteSection>
            <SiteSection siteSectionModel={new SiteSectionModel(
                'contact-details',
                'contact-details',
                'Contact Details'
            )}>
                <p>
                    For professional inquiries, shoot me an email @ <a href="mailto:providenceuniversalstudios@gmail.com">providenceuniversalstudios@gmail.com</a>. You may also reach out to me on <a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">Whatsapp</a>.
                    If perhaps something piqued your interest here, or maybe even annoyed you (I take it all in spades 😤 I promise), my personal email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>. The rest of my socials are down in the <a href="#footer">footer</a>.
                </p>
            </SiteSection>
        </Content>
    );
}