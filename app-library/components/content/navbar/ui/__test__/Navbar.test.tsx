import { render, screen } from "@testing-library/react";
import Navbar from "../Navbar";
import { modelTestObject } from "./data";

describe("Navbar", () => {
	render(<Navbar model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("navbar");

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
});
