import { ModeledVoidComponent } from "@mvc-react/components";
import { NavlinkModel } from "../navlink-model";

export const ELEMENT_NAME = "navlink";

const Navlink = function ({ model }) {
	const { link, linkText } = model.modelView;

	return (
		<li className={ELEMENT_NAME} data-testid={ELEMENT_NAME}>
			<a href={link}>{linkText}</a>
		</li>
	);
} as ModeledVoidComponent<NavlinkModel>;

export default Navlink;
