import { instantiateSiteSectionModel } from "../SiteSectionModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateSiteSectionModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateSiteSectionModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.sectionName).toEqual(
				modelInstantiatorTestInput.sectionName
			);
			expect(modelInstance.sectionTitle).toEqual(
				modelInstantiatorTestInput.sectionTitle
			);
		});
	});
});
