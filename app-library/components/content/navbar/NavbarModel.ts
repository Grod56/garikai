import { ReadonlyModel } from "@mvc-react/mvc";
import { NavlinkModel } from "../../widget/navlink/NavlinkModel";
import { ContentComponentModelView } from "../content-component";

export type NavbarModel = ReadonlyModel<NavbarModelView>;

export interface NavbarModelView extends ContentComponentModelView {
	readonly navlinkModels: NavlinkModel[];
}
