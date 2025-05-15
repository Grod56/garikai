import { FooterWithSocialsModel } from "../../FooterWithSocialsModel";

export const testModel: FooterWithSocialsModel = {
	modelView: {
		id: "footer_id",
		copyright: "(c) 2024 All rights reserved",
		socialLinkModels: [
			{
				modelView: {
					socialLink: {
						type: "Facebook",
						link: "https://facebook.com/@SimonSays",
					},
				},
			},
		],
	},
};
