import { render, screen } from "@testing-library/react";
import Footer, { ELEMENT_NAME } from "../Footer";
import { modelTestObject } from "./data";

describe("Footer", () => {
	const { id, copyright } = modelTestObject.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Footer model={modelTestObject} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps copyright property to corresponding node", () => {
		const copyrightElement = screen.getByText(copyright);
		expect(copyrightElement).toHaveTextContent(copyright);
	});
});
