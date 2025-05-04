import { render, screen } from "@testing-library/react";
import Navbar, { ELEMENT_NAME } from "../Navbar";
import { testModel } from "./data";

describe("Navbar", () => {
	const { id } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Navbar model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
});
