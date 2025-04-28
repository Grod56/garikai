import { render, screen } from "@testing-library/react";
import SiteSubsection from "../SiteSubsection";
import { modelTestObject } from "./data";

describe("SiteSubsection", () => {
	render(
		<SiteSubsection model={modelTestObject}>
			<></>
		</SiteSubsection>
	);

	const { modelInstance } = modelTestObject;

	afterAll(() => {
		expect(componentElement).toContainElement(subsectionTitleElement);
	});

	const componentElement = screen.getByTestId("site-subsection");
	const subsectionTitleElement = screen.getByText(
		modelInstance.subsectionTitle
	);

	it("maps id property to corresponding node", () => {
		expect(componentElement).toHaveAttribute("id", modelInstance.id);
	});
	it("maps subsectionTitle property to corresponding node", () => {
		expect(subsectionTitleElement).toBeDefined();
	});
});
