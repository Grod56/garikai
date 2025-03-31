import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/app.scss";
import Footer from "./components/corporeal/sections/footer/Footer";
import footerModelDefault from "./components/corporeal/sections/footer/FooterModel";
import Header from "./components/corporeal/sections/header/Header";
import headerModelDefault from "./components/corporeal/sections/header/HeaderModel";
import Navbar from "./components/corporeal/sections/navbar/Navbar";
import navbarModelDefault from "./components/corporeal/sections/navbar/NavbarModel";
import { Metadata } from "next/types";

export const metadata: Metadata = {
	title: {
		template: process.env.TITLE_TEMPLATE!,
		default: process.env.DEFAULT_TITLE!,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Header
					headerModelInstance={headerModelDefault.instantiate({
						id: "header",
						headerTitle: process.env.HEADER_TITLE!,
						headerSubtitle: process.env.HEADER_SUBTITLE!,
					})}
				/>
				<Navbar
					navbarModelInstance={navbarModelDefault.instantiate({
						id: "navbar",
					})}
				/>
				{children}
				<Footer
					footerModelInstance={footerModelDefault.instantiate({
						id: "footer",
						copyrightText: process.env.COPYRIGHT_TEXT!,
					})}
				/>
			</body>
		</html>
	);
}
