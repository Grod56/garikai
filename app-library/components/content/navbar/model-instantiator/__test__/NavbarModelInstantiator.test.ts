import { instantiateNavbarModel } from "../NavbarModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateNavbarModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateNavbarModel({ ...modelInstantiatorTestInput });
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
		});
	});
});
