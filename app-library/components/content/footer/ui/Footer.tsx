import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { FooterModel } from "../FooterModel";
import "./footer.scss";

export const ELEMENT_NAME = "footer";

const Footer = function ({ model }) {
	const { id, copyright } = model.modelView;

	return (
		<footer className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<div className="footer-container">
				<hr />
				<span className="copyright">{copyright}</span>
			</div>
		</footer>
	);
} as ModeledVoidComponent<FooterModel>;

export default Footer;
