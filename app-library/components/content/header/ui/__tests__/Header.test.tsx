import { render, screen } from "@testing-library/react";
import Header, { ELEMENT_NAME } from "../Header";
import { modelTestObject } from "./data";

describe("Header", () => {
	const { id, headerTitle, headerSubtitle } = modelTestObject.modelInstance;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(<Header model={modelTestObject} />);
		componentElement = screen.getByTestId(ELEMENT_NAME);
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps headerTitle property to corresponding node", () => {
		const headerTitleElement = screen.getByText(headerTitle);
		expect(headerTitleElement).toHaveTextContent(headerTitle);
	});
	it("maps headerSubtitle property to corresponding node", () => {
		const headerSubtitleElement = screen.getByText(headerSubtitle);
		expect(headerSubtitleElement).toHaveTextContent(headerSubtitle);
	});
});
