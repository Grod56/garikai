import { newNavbarModel } from "../../NavbarModelInstantiator";
import { modelInstantiatorTestInput } from "./data";

describe("newNavbarModel", () => {
	describe("Model returned when called", () => {
		const model = newNavbarModel({ ...modelInstantiatorTestInput });
		const { id, navlinkModels } = model.modelView;

		it("corresponds with input parameters", () => {
			expect(id).toEqual(modelInstantiatorTestInput.id);
			navlinkModels.forEach((navlinkModel, index) => {
				expect(navlinkModel.modelView).toEqual(
					modelInstantiatorTestInput.navlinkModelViews[index]
				);
			});
		});
	});
});
