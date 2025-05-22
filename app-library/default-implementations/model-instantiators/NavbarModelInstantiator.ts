import { NavlinkModelView } from "@/app-library/components/widget/navlink/NavlinkModel";
import { NavbarModel } from "../../components/content/navbar/NavbarModel";

export interface InstantiateNavbarModelParameters {
	id: string;
	navlinkModelViews: NavlinkModelView[];
}

export function newNavbarModel({
	id,
	navlinkModelViews,
}: InstantiateNavbarModelParameters): NavbarModel {
	const navlinkModels = navlinkModelViews.map((navlinkModelView) => ({
		modelView: navlinkModelView,
	}));
	return { modelView: { id, navlinkModels } };
}
