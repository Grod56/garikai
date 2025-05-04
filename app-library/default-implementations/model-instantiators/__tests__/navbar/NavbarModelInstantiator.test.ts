import { instantiateNavbarModel } from "../../NavbarModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateNavbarModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateNavbarModel({ ...modelInstantiatorTestInput });
		const { modelView } = model;

		it("corresponds with input parameters", () => {
			expect(modelView.id).toEqual(modelInstantiatorTestInput.id);
		});
	});
});
