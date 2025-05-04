import { instantiateSiteSubsectionModel } from "../../SiteSubsectionModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateSiteSubsectionModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateSiteSubsectionModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.subsectionTitle).toEqual(
				modelInstantiatorTestInput.subsectionTitle
			);
		});
	});
});
