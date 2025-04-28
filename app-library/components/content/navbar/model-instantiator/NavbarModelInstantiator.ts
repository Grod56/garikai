import { NavbarModel } from "../NavbarModel";

export interface InstantiateNavbarModelParameters {
	id: string;
}

export function instantiateNavbarModel({
	id,
}: InstantiateNavbarModelParameters): NavbarModel {
	return { modelInstance: { id } };
}
