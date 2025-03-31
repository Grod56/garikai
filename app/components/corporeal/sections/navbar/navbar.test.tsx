import navbarModelDefault, {
	NavbarModelInstance,
	NavbarModelInstanceIncarnation,
	NavbarModelInstantiator,
	NavbarModelInstantiatorIncarnation,
} from "./NavbarModel";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../../ModelIncarnation";
import { render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import { ModelInstance, ModelInstantiator } from "../../../Model";

const instantiatorTestInput = {
	id: "test-id",
};

describe("Navbar Model", () => {
	describe("NavbarModel default export", () => {
		const modelInstantiator = navbarModelDefault;

		it("is instance of ModelInstantiator", () => {
			const mockModelInstantiator: ModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of NavbarModelInstantiator", () => {
			const mockNavbarModelInstantiator: NavbarModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockNavbarModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockNavbarModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of NavbarModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				NavbarModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: NavbarModelInstance =
				modelInstantiator.instantiate({ ...instantiatorTestInput });
			it("is instance of ModelInstance", () => {
				const mockModelInstance: ModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockModelInstance
				).map((key) => key as keyof ModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of NavbarModelInstance", () => {
				const mockNavbarModelInstance: NavbarModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockNavbarModelInstance
				).map((key) => key as keyof NavbarModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockNavbarModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of NavbarModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					NavbarModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("Navbar Component", () => {
	const modelInstance: NavbarModelInstance = navbarModelDefault.instantiate({
		...instantiatorTestInput,
	});
	render(<Navbar navbarModelInstance={modelInstance} />);
	const componentElement = screen.getByTestId(modelInstance.id);

	it("renders nav as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("nav");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
});
