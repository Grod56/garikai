import { render, screen } from "@testing-library/react";
import ImageCardSkeleton, { ELEMENT_NAME } from "../ImageCardSkeleton";
import { modelTestObject } from "./data";

describe("ImageCardSkeleton", () => {
	render(<ImageCardSkeleton model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);

	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
});
