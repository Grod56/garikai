import { BannerModel } from "../BannerModel";

export interface InstantiateBannerModelParameters {
	id: string;
	bannerText: string;
}

export function instantiateBannerModel({
	id,
	bannerText,
}: InstantiateBannerModelParameters): BannerModel {
	return {
		modelInstance: {
			id,
			bannerText,
		},
	};
}
