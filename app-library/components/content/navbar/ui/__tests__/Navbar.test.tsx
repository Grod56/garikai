import { render, screen } from "@testing-library/react";
import Navbar, { ELEMENT_NAME } from "../Navbar";
import { modelTestObject } from "./data";

describe("Navbar", () => {
	const { id } = modelTestObject.modelInstance;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Navbar model={modelTestObject} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
});
