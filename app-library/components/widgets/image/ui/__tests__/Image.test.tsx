import { render, screen } from "@testing-library/react";
import { testModel } from "./data";
import Image, { ELEMENT_NAME } from "../Image";

describe("Image", () => {
	const { image, height, width } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Image model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("renders img image element", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(imageElement.tagName.toLowerCase()).toEqual("img");
	});
	it("maps image property to corresponding node", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(imageElement).toHaveAttribute(
			"src",
			//TODO: To be tidied up
			expect.stringMatching(
				new RegExp(
					`(${image.source}|${encodeURIComponent(image.source)})`
				)
			)
		);
		expect(imageElement).toHaveAttribute("alt", image.alt);
		expect(imageElement).toContainHTML(image.placeholder);
	});
	it("maps width property to corresponding node", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(imageElement).toHaveAttribute("width", width.toString());
	});
	it("maps height property to corresponding node", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(imageElement).toHaveAttribute("height", height.toString());
	});
	// TODO: Custom name widget shebang

	it("encapsulates relevant nodes within component element", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(componentElement).toContainElement(imageElement);
	});
});
