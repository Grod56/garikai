import { NavlinkModel } from "../../widget/navlink/NavlinkModel";
import {
	ContentComponentModel,
	ContentComponentModelView,
} from "../ContentComponentModel";

export type NavbarModel = ContentComponentModel<NavbarModelView>;

export interface NavbarModelView extends ContentComponentModelView {
	readonly navlinkModels: NavlinkModel[];
}
