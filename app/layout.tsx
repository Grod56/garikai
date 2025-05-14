import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/layout.scss";
import "@/app-library/styles/themes/quaint-navy.scss";
import { Explora } from "next/font/google";
import { Metadata } from "next/types";
import { instantiateFooterModel } from "../app-library/default-implementations/model-instantiators/FooterModelInstantiator";
import { instantiateHeaderModel } from "../app-library/default-implementations/model-instantiators/HeaderModelInstantiator";
import { instantiateNavbarModel } from "../app-library/default-implementations/model-instantiators/NavbarModelInstantiator";
import BodyLayout from "./body-layout/BodyLayout";

// Initial configuration ---------------------------------------------------

export const metadata: Metadata = {
	title: {
		template: process.env.TITLE_TEMPLATE!,
		default: process.env.DEFAULT_TITLE!,
	},
};
const exploraFont = Explora({ weight: "400", subsets: ["latin"] });
const headerTitle = process.env.HEADER_TITLE!;
const headerSubTitle = process.env.HEADER_SUBTITLE!;
const copyrightText = process.env.COPYRIGHT_TEXT!;

// -------------------------------------------------------------------------

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const headerModel = instantiateHeaderModel({
		id: "header",
		headerTitle: headerTitle,
		headerSubtitle: headerSubTitle,
	});
	const navbarModel = instantiateNavbarModel({
		id: "navbar",
		navlinkModelViews: [
			{ link: "/home#top", linkText: "Home" },
			{ link: "/home#bio", linkText: "Bio" },
			{ link: "/home#portfolio", linkText: "Portfolio" },
			{ link: "/home#art", linkText: "Art" },
			{ link: "/home#blog", linkText: "Blog" },
			{ link: "/home#reading-list", linkText: "Reading List" },
			{ link: "/home#contact-details", linkText: "Contact Details" },
		],
	});
	const footerModel = instantiateFooterModel({
		id: "footer",
		copyrightText: copyrightText,
	});

	return (
		<html lang="en" className={exploraFont.className}>
			<head />
			<body>
				<BodyLayout
					model={{
						modelView: { headerModel, navbarModel, footerModel },
					}}
				>
					{children}
				</BodyLayout>
			</body>
		</html>
	);
}
