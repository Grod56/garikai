import { NavbarModel } from "../../components/content/navbar/NavbarModel";

export interface InstantiateNavbarModelParameters {
	id: string;
}

export function instantiateNavbarModel({
	id,
}: InstantiateNavbarModelParameters): NavbarModel {
	return { modelView: { id } };
}
