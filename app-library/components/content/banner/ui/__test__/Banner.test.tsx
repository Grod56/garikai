import { render, screen } from "@testing-library/react";

import Banner from "../Banner";
import { modelTestObject } from "./data";

describe("Banner", () => {
	render(<Banner model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("banner");
	const bannerTextElement = screen.getByText(modelInstance.bannerText);

	it("maps id property to corresponding node", () => {
		expect(componentElement.id).toEqual(modelInstance.id);
	});
	it("maps bannerText property to corresponding node", () => {
		expect(componentElement).toContainElement(bannerTextElement);
	});
});
