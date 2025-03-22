import mainModelDefault, {
	MainModelInstance,
	MainModelInstanceIncarnation,
	MainModelInstantiator,
	MainModelInstantiatorIncarnation,
} from "./MainModel";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../ModelIncarnation";
import { render, screen } from "@testing-library/react";
import Main from "./Main";
import { ModelInstance, ModelInstantiator } from "../../Model";

const instantiatorTestInput = {
	id: "test-id",
};

describe("Main Model", () => {
	describe("MainModel default export", () => {
		const modelInstantiator = mainModelDefault;

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
		it("is instance of MainModelInstantiator", () => {
			const mockMainModelInstantiator: MainModelInstantiator = {
				instantiate: jest.fn(),
			};
			const mockModelInstantiatorProperties = Object.keys(
				mockMainModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(typeof mockMainModelInstantiator[property]).toEqual(
					typeof modelInstantiator[property]
				);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of MainModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				MainModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: MainModelInstance =
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
			it("is instance of MainModelInstance", () => {
				const mockMainModelInstance: MainModelInstance = {
					id: "id",
					compositeClassNameString: "compositeClassNameString",
				};
				const mockModelInstanceProperties = Object.keys(
					mockMainModelInstance
				).map((key) => key as keyof MainModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(typeof mockMainModelInstance[property]).toEqual(
						typeof modelInstance[property]
					);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of MainModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					MainModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
			});
		});
	});
});

describe("Main Component", () => {
	const modelInstance: MainModelInstance = mainModelDefault.instantiate({
		...instantiatorTestInput,
	});
	render(
		<Main mainModelInstance={modelInstance}>
			<></>
		</Main>
	);
	const componentElement = screen.getByTestId(modelInstance.id);

	it("renders main as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("main");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
	});
});
