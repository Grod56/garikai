import { render, screen } from "@testing-library/react";
import ImageCardSkeleton, { ELEMENT_NAME } from "../ImageCardSkeleton";
import { testModel } from "./data";

describe("ImageCardSkeleton", () => {
	const { orientation } = testModel.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<ImageCardSkeleton model={testModel} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps orientation property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-orientation",
			orientation
		);
	});
});
