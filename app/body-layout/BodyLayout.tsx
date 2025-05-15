import { FooterWithSocialsModel } from "@/app-library/components/content/footer-with-socials/FooterWithSocialsModel";
import Footer from "@/app-library/components/content/footer-with-socials/ui/FooterWithSocials";
import Header from "@/app-library/components/content/header/ui/Header";
import Navbar from "@/app-library/components/content/navbar/ui/Navbar";
import { instantiateFooterModel } from "@/app-library/default-implementations/model-instantiators/FooterModelInstantiator";
import { instantiateHeaderModel } from "@/app-library/default-implementations/model-instantiators/HeaderModelInstantiator";
import { instantiateNavbarModel } from "@/app-library/default-implementations/model-instantiators/NavbarModelInstantiator";
import "@/app-library/styles/themes/quaint-navy.scss";
import "@/app-library/styles/layouts/standard.scss";

// Initial config -----------------------------------------------------------

const headerTitle = process.env.HEADER_TITLE!;
const headerSubTitle = process.env.HEADER_SUBTITLE!;
const copyrightText = process.env.COPYRIGHT_TEXT!;

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
const footerModel: FooterWithSocialsModel = {
	modelView: {
		...instantiateFooterModel({
			id: "footer",
			copyrightText: copyrightText,
		}).modelView,
		socialLinkModels: [
			{
				modelView: {
					socialLink: {
						type: "Email",
						link: "mailto:rodneygaryx29@gmail.com",
					},
				},
			},
			{
				modelView: {
					socialLink: {
						type: "WhatsApp",
						link: "https://wa.me/263733343216".concat(
							"?text=Hello Garikai, " +
								"I was referred to this number from your website."
						) as `https://wa.me/${string}`,
					},
				},
			},
			{
				modelView: {
					socialLink: {
						type: "Instagram",
						link: "https://instagram.com/garikai_art",
					},
				},
			},
			{
				modelView: {
					socialLink: {
						type: "YouTube",
						link: "https://youtube.com/c/GarikaiGumbo",
					},
				},
			},
			{
				modelView: {
					socialLink: {
						type: "Facebook",
						link: "https://facebook.com/garikairodney",
					},
				},
			},
			{
				modelView: {
					socialLink: {
						type: "GitHub",
						link: "https://github.com/Grod56",
					},
				},
			},
		],
	},
};
//----------------------------------------------------------------------------

const BodyLayout = function ({ children }: { children: React.ReactNode }) {
	return (
		<>
			<Header model={headerModel} />
			<Navbar model={navbarModel} />
			{children}
			<Footer model={footerModel} />
		</>
	);
};

export default BodyLayout;
