import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/app.css";
import footerModelDefault from "./components/page-sections/footer/FooterModel";
import Header from "./components/page-sections/header/Header";
import headerModelDefault from "./components/page-sections/header/HeaderModel";
import Navbar from "./components/page-sections/navbar/Navbar";
import navbarModelDefault from "./components/page-sections/navbar/NavbarModel";
import { Metadata } from "next/types";
import Footer from "./components/page-sections/footer/Footer";

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
