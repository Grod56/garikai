import { render, screen } from "@testing-library/react";
import Footer, { ELEMENT_NAME } from "../Footer";
import { modelTestObject } from "./data";

describe("Footer", () => {
	render(<Footer model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const copyrightElement = screen.getByText(modelInstance.copyright);

	afterAll(() => {
		expect(componentElement).toContainElement(copyrightElement);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps copyright property to corresponding node", () => {
		expect(copyrightElement).toBeDefined();
	});
});
