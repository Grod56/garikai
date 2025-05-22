import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import SocialLink from "@/app-library/components/widget/social-link/ui/SocialLink";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { FooterModel } from "../FooterModel";
import "./footer.scss";
import { newReadonlyModel } from "@mvc-react/mvc";

export const ELEMENT_NAME = "footer";

// Convert to container component in the future
const Footer = function ({ model }) {
	const { id, copyright, socialLinkModels } = model.modelView;

	return (
		<footer className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="footer-container">
				<hr />
				<span className="copyright">{copyright}</span>
				<div className="socials">
					<ComponentList
						model={newReadonlyModel({
							componentModels: socialLinkModels,
							Component: SocialLink,
						})}
					/>
				</div>
			</div>
		</footer>
	);
} as ModeledVoidComponent<FooterModel>;

export default Footer;
