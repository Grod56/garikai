import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { NavbarModel } from "../NavbarModel";
import "./navbar.scss";
import ComponentList from "@/app-library/components/ethereal/component-list/ComponentList";
import Navlink from "@/app-library/components/widget/navlink/ui/Navlink";

export const ELEMENT_NAME = "navbar";

const Navbar = function ({ model }) {
	const { id, navlinkModels } = model.modelView;

	return (
		<nav className={ELEMENT_NAME} id={id} data-testid={ELEMENT_NAME}>
			<li className="navlinks">
				<ComponentList
					model={{
						modelView: {
							componentModels: navlinkModels,
							Component: Navlink,
						},
					}}
				/>
			</li>
		</nav>
	);
} as ModeledVoidComponent<NavbarModel>;

export default Navbar;
