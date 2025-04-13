import { ReadonlyComponentModel } from "../../ComponentModel";
import { ContentComponentModelInstance } from "../ContentComponentModel";

export interface BannerModel extends ReadonlyComponentModel {
	readonly modelInstance: BannerModelInstance;
}

export interface BannerModelInstance extends ContentComponentModelInstance {
	readonly bannerText: string;
}

export function useBannerModel(id: string, bannerText: string): BannerModel {
	return {
		modelInstance: {
			id,
			bannerText,
		} as BannerModelInstance,
	};
}
