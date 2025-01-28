import Header from './ui/headers/Header';
import HomeContent from './ui/content/HomeContent';
import Footer from './ui/footers/Footer';
import Navbar from './ui/navbars/Navbar';

export default function Page() {
    return (
      <>
        <Header headerTitle={"Hello. I am Garikai."} headerSubtitle={'And this is my Website'} />
        <Navbar />
        <HomeContent />
        <Footer />
      </>
    );
}
