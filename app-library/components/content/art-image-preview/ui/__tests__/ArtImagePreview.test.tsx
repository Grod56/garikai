import { render, screen } from "@testing-library/react";
import ArtImagePreview, { ELEMENT_NAME } from "../ArtImagePreview";
import { modelTestObject } from "./data";

describe("ArtImagePreview", () => {
	render(<ArtImagePreview model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const imageElement = screen.getByAltText(modelInstance.image.alt);

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps title property to corresponding node", () => {
		expect(componentElement).toContainHTML(modelInstance.title);
	});
	it("maps image property to corresponding node", () => {
		expect(componentElement).toContainElement(imageElement);
	});
});
