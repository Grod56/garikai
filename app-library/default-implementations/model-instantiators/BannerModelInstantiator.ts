import { BannerModel } from "../../components/content/banner/BannerModel";

export interface InstantiateBannerModelParameters {
	id: string;
	bannerText: string;
}

export function instantiateBannerModel({
	id,
	bannerText,
}: InstantiateBannerModelParameters): BannerModel {
	return {
		modelView: {
			id,
			bannerText,
		},
	};
}
