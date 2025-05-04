import { render, screen } from "@testing-library/react";

import Banner, { ELEMENT_NAME } from "../Banner";
import { modelTestObject } from "./data";

describe("Banner", () => {
	const { id, bannerText } = modelTestObject.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Banner model={modelTestObject} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps bannerText property to corresponding node", () => {
		const bannerTextElement = screen.getByText(bannerText);
		expect(bannerTextElement).toHaveTextContent(bannerText);
	});
});
