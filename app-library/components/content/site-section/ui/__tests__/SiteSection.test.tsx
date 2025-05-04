import { render, screen } from "@testing-library/react";
import SiteSection from "../SiteSection";
import { modelTestObject } from "./data";

describe("SiteSection", () => {
	const { id, sectionName, sectionTitle } = modelTestObject.modelView;
	let componentElement: HTMLElement;

	beforeEach(() => {
		render(
			<SiteSection model={modelTestObject}>
				<></>
			</SiteSection>
		);
		componentElement = screen.getByTestId("site-section");
	});

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", id);
	});
	it("maps sectionName property to corresponding node", () => {
		expect(componentElement).toHaveAttribute(
			"data-sectionname",
			sectionName
		);
	});
	it("maps sectionTitle property to corresponding node", () => {
		const titleElement = screen.getByText(sectionTitle);
		expect(titleElement).toHaveTextContent(sectionTitle);
	});
});
