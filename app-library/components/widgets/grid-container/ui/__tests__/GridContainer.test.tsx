import { render, screen } from "@testing-library/react";
import GridContainer from "../GridContainer";
import { modelTestObject } from "./data";

describe("GridContainer", () => {
	render(
		<GridContainer model={modelTestObject}>
			<></>
		</GridContainer>
	);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("grid-container");

	it("maps maxXorY property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-maxXorY",
			String(modelInstance.maxXorY)
		);
	});
	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
	it("maps overflow property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-overflow",
			String(modelInstance.overflow)
		);
	});
});
