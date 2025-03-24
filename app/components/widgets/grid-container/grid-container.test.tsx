import gridContainerModelDefault, {
	GridContainerModelInstance,
	GridContainerModelInstanceIncarnation,
	GridContainerModelInstantiator,
	GridContainerModelInstantiatorIncarnation,
} from "./GridContainerModel";
import { render, screen } from "@testing-library/react";
import GridContainer from "./GridContainer";
import { ModelInstantiator, ModelInstance } from "@/app/components/Model";
import {
	ModelInstantiatorIncarnation,
	ModelInstanceIncarnation,
} from "@/app/components/ModelIncarnation";

const instantiatorTestInput = {
	id: "test-id",
	maxXorY: 3,
	orientation: "horizontal" as "horizontal" | "vertical",
	isOverflow: true,
};

describe("GridContainer Model", () => {
	describe("GridContainerModel default export", () => {
		const modelInstantiator = gridContainerModelDefault;

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
		it("is instance of GridContainerModelInstantiator", () => {
			const mockGridContainerModelInstantiator: GridContainerModelInstantiator =
				{
					instantiate: jest.fn(),
				};
			const mockModelInstantiatorProperties = Object.keys(
				mockGridContainerModelInstantiator
			).map((key) => key as keyof ModelInstantiator);
			mockModelInstantiatorProperties.forEach((property) => {
				expect(
					typeof mockGridContainerModelInstantiator[property]
				).toEqual(typeof modelInstantiator[property]);
			});
		});
		it("is instance of ModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				ModelInstantiatorIncarnation
			);
		});
		it("is instance of GridContainerModelInstantiatorIncarnation", () => {
			expect(modelInstantiator).toBeInstanceOf(
				GridContainerModelInstantiatorIncarnation
			);
		});

		describe("Instance generated from default export", () => {
			const modelInstance: GridContainerModelInstance =
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
			it("is instance of GridContainerModelInstance", () => {
				const mockGridContainerModelInstance: GridContainerModelInstance =
					{
						maxXorY: 3,
						orientation: "horizontal",
						overflow: "true",
						id: "testid123",
						compositeClassNameString: "compositeClassName",
					};
				const mockModelInstanceProperties = Object.keys(
					mockGridContainerModelInstance
				).map((key) => key as keyof GridContainerModelInstance);

				mockModelInstanceProperties.forEach((property) => {
					expect(
						typeof mockGridContainerModelInstance[property]
					).toEqual(typeof modelInstance[property]);
				});
			});
			it("is instance of ModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(ModelInstanceIncarnation);
			});
			it("is instance of GridContainerModelInstanceIncarnation", () => {
				expect(modelInstance).toBeInstanceOf(
					GridContainerModelInstanceIncarnation
				);
			});
			it("corresponds with instantiator test input", () => {
				expect(modelInstance.id).toEqual(instantiatorTestInput.id);
				expect(modelInstance.maxXorY).toEqual(
					instantiatorTestInput.maxXorY
				);
				expect(modelInstance.orientation).toEqual(
					instantiatorTestInput.orientation
				);
				expect(modelInstance.overflow).toEqual(
					`${instantiatorTestInput.isOverflow}`
				);
			});
		});
	});
});

describe("GridContainer Component", () => {
	const modelInstance: GridContainerModelInstance =
		gridContainerModelDefault.instantiate({ ...instantiatorTestInput });
	const sampleChild = <span>Test</span>;
	render(
		<GridContainer gridContainerModelInstance={modelInstance}>
			{sampleChild}
		</GridContainer>
	);
	const componentElement = screen.getByTestId(modelInstance.id);

	it("renders div element as component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("div");
	});
	it("maps all properties for component element", () => {
		expect(componentElement).toHaveClass(
			modelInstance.compositeClassNameString,
			{ exact: true }
		);
		expect(componentElement.id).toEqual(modelInstance.id);
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
		expect(componentElement).toHaveAttribute(
			"data-maxxory",
			modelInstance.maxXorY.toString()
		);
		expect(componentElement).toHaveAttribute(
			"data-overflow",
			modelInstance.overflow
		);
	});
});
