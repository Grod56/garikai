import { instantiateMainModel } from "../../MainModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateMainModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateMainModel({ ...modelInstantiatorTestInput });
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelView.name).toEqual(modelInstantiatorTestInput.name);
		});
	});
});
