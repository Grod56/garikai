import { ReadonlyComponentModel } from "../../ComponentModel";
import { ContentComponentModelInstance } from "../ContentComponentModel";

export interface NavbarModel extends ReadonlyComponentModel {
	readonly modelInstance: NavbarModelInstance;
}

export interface NavbarModelInstance extends ContentComponentModelInstance {}

export function useNavbarModel(id: string): NavbarModel {
	return { modelInstance: { id } };
}
