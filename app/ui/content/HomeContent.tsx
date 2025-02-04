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
import { CarouselModel } from '@/app/components/Carousel/CarouselModel';
import { SiteSubsectionModel } from '@/app/components/SiteSubsection/SiteSubsectionModel';
import { FocalPostModel } from '@/app/components/FocalPost/FocalPostModel';
import { GridContainerModel } from '@/app/components/GridContainer/GridContainerModel';
import { NormalPostModel } from '@/app/components/NormalPost/NormalPostModel';
import { FlexibleContainerModel } from '@/app/components/FlexibleContainer/FlexibleContainerModel';
import { BookPreviewModel } from '@/app/components/BookPreview/BookPreviewModel';

export default function HomeContent() {

    return (
        <Content className={'home'}>
            <SiteSection className={'bio'} id={'bio'} siteSectionModel={new SiteSectionModel(
                'Bio'
            )}>
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
            <SiteSection className={'portfolio'} id={'portfolio'} siteSectionModel={new SiteSectionModel(
                'Portfolio'
            )}>
                <ComingSoonBanner comingSoonBannerModel={new ComingSoonBannerModel('Coming Soon')} />
            </SiteSection>
            <SiteSection className={'art'} id={'art'} siteSectionModel={new SiteSectionModel(
                'Art'
            )}>
                <Carousel>
                    <img className="art-image" src="/resources/images/art/20200301_121452_proc.jpg"/>
                    <img className="art-image" src="/resources/images/art/20170205_141619.jpg"/>
                    <img className="art-image" src="/resources/images/art/20180421_175359~2.jpg"/>
                    <img className="art-image" src="/resources/images/art/IMG_20200108_175637_605.jpg"/>
                </Carousel>
            </SiteSection>
            <SiteSection className={'blog'} id={'blog'} siteSectionModel={new SiteSectionModel(
                'Blog'
            )}>
                <SiteSubsection siteSubsectionModel={new SiteSubsectionModel('Latest Post')}>
                    <FocalPost
                        focalPostModel={new FocalPostModel(
                            'resources/images/IMG_20200723_101807_550-EDIT.jpg',
                            'On the Cosmic Mystery of Jesus Christ',
                            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                            'Garikai Gumbo',
                            '28 December 2024'
                        )}
                    />
                </SiteSubsection>
                <SiteSubsection siteSubsectionModel={new SiteSubsectionModel('Recent Posts')}>
                    <GridContainer gridContainerModel={new GridContainerModel(3, true, true)}>
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/image_1.jpg',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '24 December 2024'
                            )}
                        />
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/image_1.jpg',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '23 December 2024'
                            )}
                        />
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/image_1.jpg',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '27 December 2024'
                            )}
                        />
                    </GridContainer>
                </SiteSubsection>
                <SiteSubsection siteSubsectionModel={new SiteSubsectionModel('Popular Posts')}>
                    <GridContainer gridContainerModel={new GridContainerModel(3, true, true)}>
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/IMG_2337.JPG',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '26 December 2024'
                            )}
                        />
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/IMG_2337.JPG',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '26 December 2024'
                            )}
                        />
                        <NormalPost
                            normalPostModel={new NormalPostModel(
                                'resources/images/IMG_2337.JPG',
                                'On the Cosmic Mystery of Jesus Christ',
                                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?',
                                'Garikai Gumbo',
                                '26 December 2024'
                            )}
                        />
                    </GridContainer>
                </SiteSubsection>
                <a href="webpages/blog/" className="view-more">View More</a>
            </SiteSection>
            <SiteSection className={'reading-list'} id={'reading-list'} siteSectionModel={new SiteSectionModel('Reading List')}>
                <p>A mixed bag of books that have greatly influenced the way I think and books I'm currently reading through. Will probably split these into their appropriate categories for clarity in the near future.</p>
                <FlexibleContainer flexibleContainerModel={new FlexibleContainerModel()}>
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/onthecosmicmystery.jpg',
                            'On the Cosmic Mystery of Jesus Christ',
                            'St. Maximos the Confessor'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/manssearch.jpg',
                            "Man's Search for Meaning",
                            'Viktor Frankl'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/langofcreation.jpg',
                            "The Language of Creation: Cosmic Symbolism in the Book of Genesis",
                            'Matthieu Pageau'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/lifeofmoses.jpg',
                            "The Life of Moses",
                            'St. Gregory of Nyssa'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/designpatterns.jpg',
                            "Design Patterns: Elements of Reusable Object-Oriented Software",
                            'Erich Gamma and more'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/christianorientalphil.jpg',
                            "Christian and Oriental Philosophy of Art",
                            'Ananda K. Coomaraswamy'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/pracelectronics.jpg',
                            "Practical Electronics for Inventors",
                            'Paul Scherz, Simon Monk'
                        )}
                    />
                    <BookPreview
                        bookPreviewModel={new BookPreviewModel(
                            'resources/images/reading-list/hymnsonparadise_proc.jpg',
                            "Hymns on Paradise",
                            'St. Ephrem the Syrian'
                        )}
                    />
                </FlexibleContainer>
            </SiteSection>
            <SiteSection className={'contact-details'} id={'contact-details'} siteSectionModel={new SiteSectionModel('Contact Details')}>
                <p>
                    For professional inquiries, shoot me an email @ <a href="mailto:providenceuniversalstudios@gmail.com">providenceuniversalstudios@gmail.com</a>. You may also reach out to me on <a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">Whatsapp</a>.
                    If perhaps something piqued your interest here, or maybe even annoyed you (I take it all in spades 😤 I promise), my personal email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>. The rest of my socials are down in the <a href="#footer">footer</a>.
                </p>
            </SiteSection>
        </Content>
    );
}