import { instantiateLinkedComponentModel } from "../LinkedComponentModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateLinkedComponentModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateLinkedComponentModel({
			...modelInstantiatorTestInput,
		});
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.link).toEqual(modelInstantiatorTestInput.link);
		});
	});
});
