import { ReadonlyComponentModel } from "../../ComponentModel";
import { WidgetComponentModelInstance } from "../WidgetComponentModel";

export interface LinkedComponentModel extends ReadonlyComponentModel {
	readonly modelInstance: LinkedComponentModelInstance;
}

export interface LinkedComponentModelInstance
	extends WidgetComponentModelInstance {
	readonly link: URL;
}

export function useLinkedComponentModel(link: URL): LinkedComponentModel {
	return {
		modelInstance: {
			link,
		},
	};
}
