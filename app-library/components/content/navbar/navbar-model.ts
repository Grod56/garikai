import { ReadonlyModel } from "@mvc-react/mvc";
import { NavlinkModel } from "../../widget/navlink/navlink-model";
import { ContentComponentModelView } from "../content-model";

export type NavbarModel = ReadonlyModel<NavbarModelView>;

export interface NavbarModelView extends ContentComponentModelView {
	readonly navlinkModels: NavlinkModel[];
}
