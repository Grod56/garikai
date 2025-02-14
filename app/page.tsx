import Footer from "./ui/page-container/footer/Footer";
import Header from "./ui/page-container/header/Header";
import Navbar from "./ui/page-container/navbar/Navbar";
import Home from "./ui/page-container/page-content/view/Home";


export default function Page() {
    return (
      <>
        <Header headerTitle={"Hello. I am Garikai."} headerSubtitle={'And this is my Website'} />
        <Navbar />
        <Home />
        <Footer />
      </>
    );
}
