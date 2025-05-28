import { newReadonlyModel } from "@mvc-react/mvc";
import Footer from "@/app-library/components/content/footer/ui/Footer";
import Header from "@/app-library/components/content/header/ui/Header";
import Navbar from "@/app-library/components/content/navbar/ui/Navbar";
import { newFooterModel } from "@/app-library/default-implementations/component-models/footer";
import { newNavbarModel } from "@/app-library/default-implementations/component-models/navbar";
import "@/app-library/styles/app-layouts/standard.scss";
import "@/app-library/styles/themes/quaint-navy.scss";

// Initial config -----------------------------------------------------------

const headerTitle = process.env.HEADER_TITLE!;
const headerSubTitle = process.env.HEADER_SUBTITLE!;
const copyrightText = process.env.COPYRIGHT_TEXT!;

const headerModel = newReadonlyModel({
	id: "header",
	headerTitle: headerTitle,
	headerSubtitle: headerSubTitle,
});
const navbarModel = newNavbarModel({
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
const footerModel = newFooterModel({
	id: "footer",
	copyrightText: copyrightText,
	socialLinkModelViews: [
		{
			socialLink: {
				type: "Email",
				link: "mailto:rodneygaryx29@gmail.com",
			},
		},
		{
			socialLink: {
				type: "GitHub",
				link: "https://github.com/Grod56",
			},
		},
		{
			socialLink: {
				type: "Instagram",
				link: "https://instagram.com/garikai_art",
			},
		},
		{
			socialLink: {
				type: "YouTube",
				link: "https://youtube.com/c/GarikaiGumbo",
			},
		},
		{
			socialLink: {
				type: "Facebook",
				link: "https://facebook.com/garikairodney",
			},
		},
		{
			socialLink: {
				type: "WhatsApp",
				link: "https://wa.me/263733343216".concat(
					"?text=Hello Garikai, I was referred to this " +
						"number from your website.",
				) as `https://wa.me/${string}`,
			},
		},
	],
});

//----------------------------------------------------------------------------

const AppDesign = function ({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header model={headerModel} />
			<Navbar model={navbarModel} />
			{children}
			<Footer model={footerModel} />
		</>
	);
};

export default AppDesign;
