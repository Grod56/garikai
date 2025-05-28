import { render, screen } from "@testing-library/react";
import Main, { ELEMENT_NAME } from "../Main";
import { testModel } from "./data";

describe("Main", () => {
	const { id, name } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(
			<Main model={testModel}>
				<></>
			</Main>,
		);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps name property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("data-name", name);
	});
});
