import { LinkedComponentModel } from "@/app-library/components/widgets/linked-component/LinkedComponentModel";

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
