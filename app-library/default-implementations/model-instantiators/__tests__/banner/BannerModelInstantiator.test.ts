import { instantiateBannerModel } from "../../BannerModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateBannerModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateBannerModel({ ...modelInstantiatorTestInput });
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.bannerText).toEqual(
				modelInstantiatorTestInput.bannerText
			);
		});
	});
});
