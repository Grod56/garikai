import { render, screen } from "@testing-library/react";
import ImageCard from "../ImageCard";
import { modelTestObject } from "./data";

describe("ImageCard", () => {
	render(
		<ImageCard model={modelTestObject}>
			<></>
		</ImageCard>
	);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("image-card");
	const thumbnailElement = screen.getByAltText(modelInstance.thumbnail.alt);

	afterAll(() => {
		expect(componentElement).toContainElement(thumbnailElement);
	});
	it("maps thumbnail property to corresponding node", () => {
		expect(thumbnailElement).toBeDefined(); //TODO: Future separate Image component methinks
	});
	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
});
