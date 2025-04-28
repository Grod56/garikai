import { instantiateSiteSubsectionModel } from "../SiteSubsectionModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateSiteSubsectionModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateSiteSubsectionModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.subsectionTitle).toEqual(
				modelInstantiatorTestInput.subsectionTitle
			);
		});
	});
});
