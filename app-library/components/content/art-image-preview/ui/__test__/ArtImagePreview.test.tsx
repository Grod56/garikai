import { render, screen } from "@testing-library/react";
import ArtImagePreview from "../ArtImagePreview";
import { modelTestObject } from "./data";

describe("ArtImagePreview", () => {
	render(<ArtImagePreview model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("art-image-preview");
	const imageElement = screen.getByAltText(modelInstance.image.alt);

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps title property to corresponding node", () => {
		expect(componentElement).toContainHTML(modelInstance.title);
	});
	//TODO: Refine in the future maybe?
	it("maps image property to corresponding node", () => {
		expect(componentElement).toContainElement(imageElement);
	});
});
