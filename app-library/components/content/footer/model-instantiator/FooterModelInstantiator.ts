import { FooterModel } from "../FooterModel";

export interface InstantiateFooterModelParameters {
	id: string;
	copyrightText: string;
}

export function instantiateFooterModel({
	id,
	copyrightText,
}: InstantiateFooterModelParameters): FooterModel {
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
