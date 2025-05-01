import { render, screen } from "@testing-library/react";
import ImageCard, { ELEMENT_NAME } from "../ImageCard";
import { modelTestObject } from "./data";

describe("ImageCard", () => {
	render(
		<ImageCard model={modelTestObject}>
			<></>
		</ImageCard>
	);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
	const thumbnailElement = screen.getByAltText(modelInstance.thumbnail.alt);

	it("maps thumbnail property to corresponding node", () => {
		expect(thumbnailElement).toContainHTML(modelInstance.thumbnail.alt);
		expect(thumbnailElement).toContainHTML(
			modelInstance.thumbnail.placeholder
		);
	});
	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
});
