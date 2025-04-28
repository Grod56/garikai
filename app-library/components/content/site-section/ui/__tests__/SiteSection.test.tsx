import { render, screen } from "@testing-library/react";
import SiteSection from "../SiteSection";
import { modelTestObject } from "./data";

describe("SiteSection", () => {
	render(
		<SiteSection model={modelTestObject}>
			<></>
		</SiteSection>
	);

	const { modelInstance } = modelTestObject;

	afterAll(() => {
		expect(componentElement).toContainElement(titleElement);
	});

	const componentElement = screen.getByTestId("site-section");
	const titleElement = screen.getByText(modelInstance.sectionTitle);

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps sectionName property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-sectionname",
			modelInstance.sectionName
		);
	});
	it("maps sectionTitle property to corresponding node", () => {
		expect(titleElement).toBeDefined();
	});
});
