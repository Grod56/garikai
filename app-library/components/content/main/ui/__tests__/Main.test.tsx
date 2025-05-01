import { render, screen } from "@testing-library/react";
import Main, { ELEMENT_NAME } from "../Main";
import { modelTestObject } from "./data";

describe("Main", () => {
	render(
		<Main model={modelTestObject}>
			<></>
		</Main>
	);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps name property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-name",
			modelInstance.name
		);
	});
});
