import { FooterModel } from "../../components/content/footer/FooterModel";

export interface InstantiateFooterModelParameters {
	id: string;
	copyrightText: string;
}

export function instantiateFooterModel({
	id,
	copyrightText,
}: InstantiateFooterModelParameters): FooterModel {
	return {
		modelView: {
			id,
			get copyright(): string {
				return `© 
					${new Date(Date.now()).toLocaleDateString("en-US", { year: "numeric" })} ${copyrightText}
				`;
			},
		},
	};
}
