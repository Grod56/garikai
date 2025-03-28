import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/app.scss";
import Footer from "./components/sections/footer/Footer";
import footerModelDefault from "./components/sections/footer/FooterModel";
import Header from "./components/sections/header/Header";
import headerModelDefault from "./components/sections/header/HeaderModel";
import Navbar from "./components/sections/navbar/Navbar";
import navbarModelDefault from "./components/sections/navbar/NavbarModel";
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
