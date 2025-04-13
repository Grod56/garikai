import "bootstrap/dist/css/bootstrap.min.css";
import "@/app/app.scss";
import { Metadata } from "next/types";
import Header from "./components/content/header/Header";
import Navbar from "./components/content/navbar/Navbar";
import Footer from "./components/content/footer/Footer";
import { useHeaderModel } from "./components/content/header/HeaderModel";
import { useNavbarModel } from "./components/content/navbar/NavbarModel";
import { useFooterModel } from "./components/content/footer/FooterModel";

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
	const headerModel = useHeaderModel(
		"header",
		process.env.HEADER_TITLE!,
		process.env.HEADER_SUBTITLE!
	);
	const navbarModel = useNavbarModel("navbar");
	const footerModel = useFooterModel("footer", process.env.COPYRIGHT_TEXT!);

	return (
		<html lang="en">
			<body>
				<Header model={headerModel} />
				<Navbar model={navbarModel} />
				{children}
				<Footer model={footerModel} />
			</body>
		</html>
	);
}
