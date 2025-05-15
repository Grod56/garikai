import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import SocialLink from "@/app-library/components/widget/social-link/ui/SocialLink";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { ELEMENT_NAME } from "../../footer/ui/Footer";
import { FooterWithSocialsModel } from "../FooterWithSocialsModel";
import "./../../footer/ui/footer.scss";
import "./footer-with-socials.scss";

export { ELEMENT_NAME };

const Footer = function ({ model }) {
	const { id, copyright, socialLinkModels } = model.modelView;

	return (
		<footer className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="footer-container">
				<hr />
				<span className="copyright">{copyright}</span>
				<div className="socials">
					<ComponentList
						model={{
							modelView: {
								componentModels: socialLinkModels,
								Component: SocialLink,
							},
						}}
					/>
				</div>
			</div>
		</footer>
	);
} as ModeledVoidComponent<FooterWithSocialsModel>;

export default Footer;
