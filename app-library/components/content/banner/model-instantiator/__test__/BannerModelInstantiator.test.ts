import { instantiateBannerModel } from "../BannerModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateBannerModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateBannerModel({ ...modelInstantiatorTestInput });
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.bannerText).toEqual(
				modelInstantiatorTestInput.bannerText
			);
		});
	});
});
