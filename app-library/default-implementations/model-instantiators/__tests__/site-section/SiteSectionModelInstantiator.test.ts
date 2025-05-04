import { instantiateSiteSectionModel } from "../../SiteSectionModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateSiteSectionModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateSiteSectionModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.sectionName).toEqual(
				modelInstantiatorTestInput.sectionName
			);
			expect(modelView.sectionTitle).toEqual(
				modelInstantiatorTestInput.sectionTitle
			);
		});
	});
});
