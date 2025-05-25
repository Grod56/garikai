import { NavlinkModelView } from "@/app-library/components/widget/navlink/navlink";
import { NavbarModel } from "../../components/content/navbar/navbar";

export interface NewNavbarModelParameters {
	id: string;
	navlinkModelViews: NavlinkModelView[];
}

export function newNavbarModel({
	id,
	navlinkModelViews,
}: NewNavbarModelParameters): NavbarModel {
	const navlinkModels = navlinkModelViews.map((navlinkModelView) => ({
		modelView: navlinkModelView,
	}));
	return { modelView: { id, navlinkModels } };
}
