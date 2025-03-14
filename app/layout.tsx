import "bootstrap/dist/css/bootstrap.min.css";
import '@/app/app.css';
import FooterModelInstantiatorInstance, { FooterModelInstantiator } from "./ui/sections/footer/FooterModel";
import Header from "./ui/sections/header/Header";
import { HeaderModelInstantiator, HeaderModelInstantiatorImplementation } from "./ui/sections/header/HeaderModel";
import Navbar from "./ui/sections/navbar/Navbar";
import { NavbarModelInstantiator, NavbarModelInstantiatorImplementation } from "./ui/sections/navbar/NavbarModel";
import { Metadata } from "next/types";
import Footer from "./ui/sections/footer/Footer";

export const metadata: Metadata = {
	title: {
    	template: '%s | Garikai Gumbo',
    	default: 'Home | Garikai Gumbo',
	}
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {

	const headerModelInstantiator: HeaderModelInstantiator = new HeaderModelInstantiatorImplementation();
	const footerModelInstantiator: FooterModelInstantiator = FooterModelInstantiatorInstance;
	const navbarModelInstantiator: NavbarModelInstantiator = new NavbarModelInstantiatorImplementation();

	return (
		<html lang="en">
			<body>
				<Header headerModelInstance={
					headerModelInstantiator.instantiate(
						'header',
						"Hello. I am Garikai.",
						'And this is my Website'
					)
				}/>
				<Navbar navbarModelInstance={
					navbarModelInstantiator.instantiate('navbar')
				}/>
				{children}
				<Footer footerModelInstance={
					footerModelInstantiator.instantiate({
						id: 'footer',
						copyrightText: 'Providence Universal Studios. All rights reserved.'
					})
				}/>
			</body>
		</html>
	);
}