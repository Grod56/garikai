import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/app.css";
import footerModelDefault from "./ui/sections/footer/FooterModel";
import Header from "./ui/sections/header/Header";
import headerModelDefault from "./ui/sections/header/HeaderModel";
import Navbar from "./ui/sections/navbar/Navbar";
import navbarModelDefault from "./ui/sections/navbar/NavbarModel";
import { Metadata } from "next/types";
import Footer from "./ui/sections/footer/Footer";

export const metadata: Metadata = {
	title: {
		template: "%s | Garikai Gumbo",
		default: "Home | Garikai Gumbo",
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
						headerTitle: "Hello. I am Garikai.",
						headerSubtitle: "And this is my Website",
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
						copyrightText:
							"Providence Universal Studios. All rights reserved.",
					})}
				/>
			</body>
		</html>
	);
}
