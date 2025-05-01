import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { modelTestObject } from "./data";

describe("Header", () => {
	render(<Header model={modelTestObject} />);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId("header");
	const headerTitleElement = screen.getByText(modelInstance.headerTitle);
	const headerSubtitleElement = screen.getByText(
		modelInstance.headerSubtitle
	);

	afterAll(() => {
		expect(componentElement).toContainElement(headerTitleElement);
		expect(componentElement).toContainElement(headerSubtitleElement);
	});
	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps headerTitle property to corresponding node", () => {
		expect(headerTitleElement).toBeDefined();
	});
	it("maps headerSubtitle property to corresponding node", () => {
		expect(headerSubtitleElement).toBeDefined();
	});
});
