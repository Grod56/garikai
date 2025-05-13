import { render, screen } from "@testing-library/react";
import GridContainer, { ELEMENT_NAME } from "../GridContainer";
import { testModel } from "./data";

describe("GridContainer", () => {
	const { maxXorY, orientation, overflow } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(
			<GridContainer model={testModel}>
				<></>
			</GridContainer>
		);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps maxXorY property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-maxXorY",
			String(maxXorY)
		);
	});
	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			orientation
		);
	});
	it("maps overflow property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-overflow",
			String(overflow)
		);
	});
});
