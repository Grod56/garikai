import { render, screen } from "@testing-library/react";
import ImageCardSkeleton from "../ImageCardSkeleton";
import { modelTestObject } from "./data";

describe("ImageCardSkeleton", () => {
	render(<ImageCardSkeleton model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("image-card-skeleton");

	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			modelInstance.orientation
		);
	});
});
