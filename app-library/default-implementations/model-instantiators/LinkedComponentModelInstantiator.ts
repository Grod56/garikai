import { LinkedComponentModel } from "@/app-library/components/widget/linked-component/LinkedComponentModel";

export interface InstantiateLinkedComponentModelParameters {
	link: URL;
}

export function instantiateLinkedComponentModel({
	link,
}: InstantiateLinkedComponentModelParameters): LinkedComponentModel {
	return {
		modelView: {
			link,
		},
	};
}
