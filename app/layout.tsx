import "bootstrap/dist/css/bootstrap.min.css";
import '@/app/app.css';
import Footer from "./ui/sections/footer/Footer";
import { FooterModel } from "./ui/sections/footer/FooterModel";
import Header from "./ui/sections/header/Header";
import { HeaderModel } from "./ui/sections/header/HeaderModel";
import Navbar from "./ui/sections/navbar/Navbar";
import { NavbarModel } from "./ui/sections/navbar/NavbarModel";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: {
    template: '%s | Garikai Gumbo',
    default: 'Garikai Gumbo',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header headerModel={new HeaderModel({
            headerTitle: "Hello. I am Garikai.",
            headerSubtitle: 'And this is my Website'
          })} />
        <Navbar navbarModel={new NavbarModel()}/>
        {children}
        <Footer footerModel={new FooterModel({id: 'footer'})}/>
      </body>
    </html>
  );
}