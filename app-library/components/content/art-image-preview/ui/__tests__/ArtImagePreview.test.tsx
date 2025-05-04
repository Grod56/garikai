import { render, screen } from "@testing-library/react";
import ArtImagePreview, { ELEMENT_NAME } from "../ArtImagePreview";
import { testModel } from "./data";

describe("ArtImagePreview", () => {
	const { id, title, image } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<ArtImagePreview model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps title property to corresponding node", () => {
		expect(componentElement).toContainHTML(title);
	});
	it("maps image property to corresponding node", () => {
		const imageElement = screen.getByAltText(image.alt);
		expect(imageElement).toContainHTML(image.source);
		expect(imageElement).toContainHTML(image.alt);
		expect(imageElement).toContainHTML(image.placeholder);
	});
});
