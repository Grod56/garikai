import { LinkedComponentModel } from "../LinkedComponentModel";

export interface InstantiateLinkedComponentModelParameters {
	link: URL;
}

export function instantiateLinkedComponentModel({
	link,
}: InstantiateLinkedComponentModelParameters): LinkedComponentModel {
	return {
		modelInstance: {
			link,
		},
	};
}
