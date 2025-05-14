import { BannerModel } from "../../components/widget/banner/BannerModel";

export interface InstantiateBannerModelParameters {
	bannerText: string;
}

export function instantiateBannerModel({
	bannerText,
}: InstantiateBannerModelParameters): BannerModel {
	return {
		modelView: {
			bannerText,
		},
	};
}
