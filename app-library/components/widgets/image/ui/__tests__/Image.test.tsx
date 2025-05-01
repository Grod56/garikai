import { render, screen } from "@testing-library/react";
import { modelTestObject } from "./data";
import Image, { ELEMENT_NAME } from "../Image";

describe("Image", () => {
	render(<Image model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const imageElement = screen.getByAltText(modelInstance.image.alt);

	it("maps image property to corresponding node", () => {
		expect(imageElement).toHaveAttribute(
			"src",
			expect.stringMatching(
				new RegExp(
					`(${modelInstance.image.source}|${encodeURIComponent(modelInstance.image.source)})`
				)
			)
		);
		expect(imageElement).toHaveAttribute("alt", modelInstance.image.alt);
		expect(imageElement).toContainHTML(modelInstance.image.placeholder);
	});
	it("maps width property to corresponding node", () => {
		expect(imageElement).toHaveAttribute(
			"width",
			modelInstance.width.toString()
		);
	});
	it("maps height property to corresponding node", () => {
		expect(imageElement).toHaveAttribute(
			"height",
			modelInstance.height.toString()
		);
	});
	// TODO: Custom name widget shebang

	it("encapsulates relevant nodes within component element", () => {
		expect(componentElement).toContainElement(imageElement);
	});
});
