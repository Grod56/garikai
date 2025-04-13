import { ReadonlyComponentModel } from "../../ComponentModel";
import { ContentComponentModelInstance } from "../ContentComponentModel";

export interface FooterModel extends ReadonlyComponentModel {
	readonly modelInstance: FooterModelInstance;
}

export interface FooterModelInstance extends ContentComponentModelInstance {
	readonly copyright: string;
}

export function useFooterModel(id: string, copyrightText: string): FooterModel {
	return {
		modelInstance: {
			id,
			get copyright(): string {
				return `© 
					${new Date(Date.now()).toLocaleDateString("en-US", { year: "numeric" })} ${copyrightText}
				`;
			},
		},
	};
}
