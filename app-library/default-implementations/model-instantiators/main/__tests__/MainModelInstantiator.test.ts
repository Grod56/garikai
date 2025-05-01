import { instantiateMainModel } from "../MainModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateMainModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateMainModel({ ...modelInstantiatorTestInput });
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.name).toEqual(modelInstantiatorTestInput.name);
		});
	});
});
