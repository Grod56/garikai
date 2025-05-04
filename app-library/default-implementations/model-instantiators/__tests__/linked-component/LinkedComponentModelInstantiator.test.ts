import { instantiateLinkedComponentModel } from "../../LinkedComponentModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateLinkedComponentModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateLinkedComponentModel({
			...modelInstantiatorTestInput,
		});
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.link).toEqual(modelInstantiatorTestInput.link);
		});
	});
});
