import { instantiateFooterModel } from "../FooterModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("instantiateFooterModel", () => {
	describe("Model returned when called", () => {
		const model = instantiateFooterModel({ ...modelInstantiatorTestInput });
		const { modelInstance } = model;

		it("corresponds with input parameters", () => {
			expect(modelInstance.id).toEqual(modelInstantiatorTestInput.id);
			expect(modelInstance.copyright).toContain(
				modelInstantiatorTestInput.copyrightText
			);
		});
	});
});
