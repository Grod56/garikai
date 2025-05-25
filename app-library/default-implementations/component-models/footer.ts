import { FooterModel } from "@/app-library/components/content/footer/footer";
import { SocialLinkModelView } from "@/app-library/components/widget/social-link/social-link";
import { newReadonlyModel } from "@mvc-react/mvc";

export interface NewFooterModelParameters {
	id: string;
	copyrightText: string;
	socialLinkModelViews: SocialLinkModelView[];
}

export function newFooterModel({
	id,
	copyrightText,
	socialLinkModelViews,
}: NewFooterModelParameters): FooterModel {
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
