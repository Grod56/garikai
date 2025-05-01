import { render, screen } from "@testing-library/react";
import { modelTestObject } from "./data";
import Image from "../Image";

describe("Image", () => {
	render(<Image model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByAltText(modelInstance.image.alt);

	it("maps image property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"src",
			expect.stringMatching(
				new RegExp(
					`(${modelInstance.image.source}|${encodeURIComponent(modelInstance.image.source)})`
				)
			)
		);
		expect(componentElement).toHaveAttribute(
			"alt",
			modelInstance.image.alt
		);
		expect(componentElement).toContainHTML(modelInstance.image.placeholder);
	});
	it("maps width property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"width",
			modelInstance.width.toString()
		);
	});
	it("maps height property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"height",
			modelInstance.height.toString()
		);
	});
});
