import { render, screen } from "@testing-library/react";
import SiteSubsection, { ELEMENT_NAME } from "../SiteSubsection";
import { modelTestObject } from "./data";

describe("SiteSubsection", () => {
	render(
		<SiteSubsection model={modelTestObject}>
			<></>
		</SiteSubsection>
	);

	const { modelInstance } = modelTestObject;
	const componentElement = screen.getByTestId(ELEMENT_NAME);
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
