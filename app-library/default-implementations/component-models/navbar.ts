import { NavlinkModelView } from "@/app-library/components/widget/navlink/navlink-model";
import { NavbarModel } from "../../components/content/navbar/navbar-model";
import { newReadonlyModel } from "@mvc-react/mvc";

export interface NewNavbarModelParameters {
	id: string;
	navlinkModelViews: NavlinkModelView[];
}

export function newNavbarModel({
	id,
	navlinkModelViews,
}: NewNavbarModelParameters): NavbarModel {
	const navlinkModels = navlinkModelViews.map(navlinkModelView => ({
		modelView: navlinkModelView,
	}));
	return newReadonlyModel({ id, navlinkModels });
}
