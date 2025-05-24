import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { NavbarModel } from "../NavbarModel";
import Navlink from "@/app-library/components/widget/navlink/ui/Navlink";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ComponentList } from "@mvc-react/components";
import "./navbar.scss";

export const ELEMENT_NAME = "navbar";

const Navbar = function ({ model }) {
	const { id, navlinkModels } = model.modelView;

	return (
		<nav className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<li className="navlinks">
				<ComponentList
					model={newReadonlyModel({
						componentModels: navlinkModels,
						Component: Navlink,
					})}
				/>
			</li>
		</nav>
	);
} as ModeledVoidComponent<NavbarModel>;

export default Navbar;
