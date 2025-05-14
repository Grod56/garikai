import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { NavlinkModel } from "../NavlinkModel";
import "./navlink.scss";

export const ELEMENT_NAME = "navlink";

const Navlink = function ({ model }) {
	const { link, linkText } = model.modelView;

	return (
		<a className={ELEMENT_NAME} href={link} data-testid={ELEMENT_NAME}>
			{linkText}
		</a>
	);
} as ModeledVoidComponent<NavlinkModel>;

export default Navlink;
