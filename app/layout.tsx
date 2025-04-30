import "bootstrap/dist/css/bootstrap.min.css";
import { Metadata } from "next/types";
import { instantiateFooterModel } from "../app-library/components/content/footer/model-instantiator/FooterModelInstantiator";
import Footer from "../app-library/components/content/footer/ui/Footer";
import { instantiateHeaderModel } from "../app-library/components/content/header/model-instantiator/HeaderModelInstantiator";
import Header from "../app-library/components/content/header/ui/Header";
import { instantiateNavbarModel } from "../app-library/components/content/navbar/model-instantiator/NavbarModelInstantiator";
import Navbar from "../app-library/components/content/navbar/ui/Navbar";
import { Explora } from "next/font/google";
import "@/app/app.scss";

export const metadata: Metadata = {
	title: {
		template: process.env.TITLE_TEMPLATE!,
		default: process.env.DEFAULT_TITLE!,
	},
};

const exploraFont = Explora({ weight: "400" });

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const headerModel = instantiateHeaderModel({
		id: "header",
		headerTitle: process.env.HEADER_TITLE!,
		headerSubtitle: process.env.HEADER_SUBTITLE!,
	});
	const navbarModel = instantiateNavbarModel({ id: "navbar" });
	const footerModel = instantiateFooterModel({
		id: "footer",
		copyrightText: process.env.COPYRIGHT_TEXT!,
	});

	return (
		<html lang="en" className={exploraFont.className}>
			<head />
			<body>
				<Header model={headerModel} />
				<Navbar model={navbarModel} />
				{children}
				<Footer model={footerModel} />
			</body>
		</html>
	);
}
