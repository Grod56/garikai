import { render, screen } from "@testing-library/react";
import Footer, { ELEMENT_NAME } from "../Footer";
import { testModel } from "./data";

describe("Footer", () => {
	const { id, copyright } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Footer model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});
	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps copyright property to corresponding node", () => {
		const copyrightElement = screen.getByText(copyright);
		expect(copyrightElement).toBeInTheDocument();
	});
	it("renders footer component element", () => {
		expect(componentElement.tagName.toLowerCase()).toEqual("footer");
	});
});
