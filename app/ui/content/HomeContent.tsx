import SiteSection from '../components/SiteSection';
import Content from './Content';
import ComingSoonBanner from '../components/ComingSoonBanner';
import SiteSubsection from '../components/SiteSubsection';
import FlexibleContainer from '../components/FlexibleContainer';
import Carousel from '../components/Carousel';
import FocalPost from '../components/FocalPost';
import NormalPost from '../components/NormalPost';
import BookPreview from '../components/BookPreview';
import GridContainer from '../components/GridContainer';

export default function HomeContent() {

    return (
        <Content className={'home'}>
            <SiteSection sectionTitle={'Bio'} className={'bio'} id={'bio'}>
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
            <SiteSection sectionTitle={'Portfolio'} className={'portfolio'} id={'portfolio'}>
                <ComingSoonBanner />
            </SiteSection>
            <SiteSection sectionTitle={'Art'} className={'art'} id={'art'}>
                <Carousel>
                    <img className="art-image" src="/resources/images/art/20200301_121452_proc.jpg"/>
                    <img className="art-image" src="/resources/images/art/20170205_141619.jpg"/>
                    <img className="art-image" src="/resources/images/art/20180421_175359~2.jpg"/>
                    <img className="art-image" src="/resources/images/art/IMG_20200108_175637_605.jpg"/>
                </Carousel>
            </SiteSection>
            <SiteSection sectionTitle={'Blog'} className={'blog'} id={'blog'}>
                <SiteSubsection subsectionTitle={'Latest Post'} className={'latest-post'}>
                    <FocalPost 
                        imageSource={'resources/images/IMG_20200723_101807_550-EDIT.jpg'}
                        postTitle={'On the Cosmic Mystery of Jesus Christ'}
                        postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                        postAuthor={'Garikai Gumbo'}
                        postDate={'28 December 2024'}
                    />
                </SiteSubsection>
                <SiteSubsection subsectionTitle={'Recent Posts'} className={'recent-posts'}>
                    <GridContainer maxXorY={3} isHorizontal={true} isOverflow={true}>
                        <NormalPost
                            imageSource={'resources/images/image_1.jpg'}
                            postTitle={'On the Cosmic Mystery of Jesus Christ'}
                            postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                            postAuthor={'Garikai Gumbo'}
                            postDate={'27 December 2024'}
                        />
                        <NormalPost
                            imageSource={'resources/images/image_1.jpg'}
                            postTitle={'On the Cosmic Mystery of Jesus Christ'}
                            postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                            postAuthor={'Garikai Gumbo'}
                            postDate={'27 December 2024'}
                        />
                        <NormalPost
                            imageSource={'resources/images/image_1.jpg'}
                            postTitle={'On the Cosmic Mystery of Jesus Christ'}
                            postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                            postAuthor={'Garikai Gumbo'}
                            postDate={'27 December 2024'}
                        />
                    </GridContainer>
                </SiteSubsection>
                <SiteSubsection subsectionTitle={'Popular Posts'} className={'popular-posts'}>
                    <GridContainer maxXorY={3} isHorizontal={true} isOverflow={true}>
                        <NormalPost
                                imageSource={'resources/images/IMG_2337.JPG'}
                                postTitle={'On the Cosmic Mystery of Jesus Christ'}
                                postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                                postAuthor={'Garikai Gumbo'}
                                postDate={'26 December 2024'}
                        />
                        <NormalPost
                                imageSource={'resources/images/IMG_2337.JPG'}
                                postTitle={'On the Cosmic Mystery of Jesus Christ'}
                                postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                                postAuthor={'Garikai Gumbo'}
                                postDate={'26 December 2024'}
                        />
                        <NormalPost
                                imageSource={'resources/images/IMG_2337.JPG'}
                                postTitle={'On the Cosmic Mystery of Jesus Christ'}
                                postText={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolor alias deleniti ea ipsa perferendis quod facere! Enim expedita unde illo deleniti error vel blanditiis quibusdam soluta a. Molestiae, fugiat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam corrupti ipsum, cumque necessitatibus corporis est odio dolor! Neque necessitatibus rem corporis modi, aspernatur voluptas obcaecati architecto nostrum corrupti voluptates molestiae?'}
                                postAuthor={'Garikai Gumbo'}
                                postDate={'26 December 2024'}
                        />
                    </GridContainer>
                </SiteSubsection>
                <a href="webpages/blog/" className="view-more">View More</a>
            </SiteSection>
            <SiteSection sectionTitle={'Reading List'} className={'reading-list'} id={'reading-list'}>
                <p>A mixed bag of books that have greatly influenced the way I think and books I'm currently reading through. Will probably split these into their appropriate categories for clarity in the near future.</p>
                <FlexibleContainer>
                    <BookPreview
                        imageSource={'resources/images/reading-list/onthecosmicmystery.jpg'}
                        bookTitle={'On the Cosmic Mystery of Jesus Christ'}
                        bookAuthor={'St. Maximos the Confessor'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/manssearch.jpg'}
                        bookTitle={"Man's Search for Meaning"}
                        bookAuthor={'Viktor Frankl'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/langofcreation.jpg'}
                        bookTitle={"The Language of Creation: Cosmic Symbolism in the Book of Genesis"}
                        bookAuthor={'Matthieu Pageau'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/lifeofmoses.jpg'}
                        bookTitle={"The Life of Moses"}
                        bookAuthor={'St. Gregory of Nyssa'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/designpatterns.jpg'}
                        bookTitle={"Design Patterns: Elements of Reusable Object-Oriented Software"}
                        bookAuthor={'Erich Gamma and more'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/christianorientalphil.jpg'}
                        bookTitle={"Christian and Oriental Philosophy of Art"}
                        bookAuthor={'Ananda K. Coomaraswamy'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/pracelectronics.jpg'}
                        bookTitle={"Practical Electronics for Inventors"}
                        bookAuthor={'Paul Scherz, Simon Monk'}
                    />
                    <BookPreview
                        imageSource={'resources/images/reading-list/hymnsonparadise_proc.jpg'}
                        bookTitle={"Hymns on Paradise"}
                        bookAuthor={'St. Ephrem the Syrian'}
                    />
                </FlexibleContainer>
            </SiteSection>
            <SiteSection sectionTitle={'Contact Details'} className={'contact-details'} id={'contact-details'}>
                <p>
                    For professional inquiries, shoot me an email @ <a href="mailto:providenceuniversalstudios@gmail.com">providenceuniversalstudios@gmail.com</a>. You may also reach out to me on <a href="https://wa.me/263784310140?text=Hello Garikai, I was referred to this number from your website.">Whatsapp</a>.
                    If perhaps something piqued your interest here, or maybe even annoyed you (I take it all in spades 😤 I promise), my personal email is right <a href="mailto:rodneygaryx29@gmail.com">here</a>. The rest of my socials are down in the <a href="#footer">footer</a>.
                </p>
            </SiteSection>
        </Content>
    );
}