import { NavbarModel } from "../navbar-model";
import Navlink from "@/app-library/components/widget/navlink/ui/Navlink";
import { newReadonlyModel } from "@mvc-react/mvc";
import { ComponentList, ModeledVoidComponent } from "@mvc-react/components";
import "./navbar.scss";

export const ELEMENT_NAME = "navbar";

const Navbar = function ({ model }) {
	const { id, navlinkModels } = model.modelView;

	return (
		<nav className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<menu className="navlinks">
				<ComponentList
					model={newReadonlyModel({
						componentModels: navlinkModels,
						Component: Navlink,
					})}
				/>
			</menu>
		</nav>
	);
} as ModeledVoidComponent<NavbarModel>;

export default Navbar;
