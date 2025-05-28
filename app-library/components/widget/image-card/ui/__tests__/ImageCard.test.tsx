import { render, screen } from "@testing-library/react";
import ImageCard, { ELEMENT_NAME } from "../ImageCard";
import { testModel } from "./data";

describe("ImageCard", () => {
	const { thumbnail, orientation } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(
			<ImageCard model={testModel}>
				<></>
			</ImageCard>,
		);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps thumbnail property to corresponding node", () => {
		const thumbnailElement = screen.getByAltText(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.source);
		expect(thumbnailElement).toContainHTML(thumbnail.alt);
		expect(thumbnailElement).toContainHTML(thumbnail.placeholder);
	});
	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			orientation,
		);
	});
});
