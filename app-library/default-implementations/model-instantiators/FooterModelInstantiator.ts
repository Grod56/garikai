import { FooterModel } from "@/app-library/components/content/footer/FooterModel";
import { SocialLinkModelView } from "@/app-library/components/widget/social-link/SocialLinkModel";
import { newReadonlyModel } from "@mvc-react/mvc";

export interface InstantiateFooterModelParameters {
	id: string;
	copyrightText: string;
	socialLinkModelViews: SocialLinkModelView[];
}

export function instantiateFooterModel({
	id,
	copyrightText,
	socialLinkModelViews,
}: InstantiateFooterModelParameters): FooterModel {
	return newReadonlyModel({
		id,
		get copyright(): string {
			return `© 
					${new Date(Date.now()).toLocaleDateString("en-US", { year: "numeric" })} ${copyrightText}
				`;
		},
		socialLinkModels: socialLinkModelViews.map((modelView) =>
			newReadonlyModel(modelView)
		),
	});
}
