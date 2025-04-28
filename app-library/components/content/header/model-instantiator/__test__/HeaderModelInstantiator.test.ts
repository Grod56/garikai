import { instantiateHeaderModel } from "../HeaderModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateHeaderModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateHeaderModel({ ...modelInstantiatorTestInput });
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.headerTitle).toEqual(
				modelInstantiatorTestInput.headerTitle
			);
			expect(modelInstance.headerSubtitle).toEqual(
				modelInstantiatorTestInput.headerSubtitle
			);
		});
	});
});
