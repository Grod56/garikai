import { openExternalSite } from "../../../../../utilities/ui";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkedComponent, { ELEMENT_NAME } from "../LinkedComponent";
import { modelTestObject } from "./data";
jest.mock("../../../../../utilities/ui");

describe("LinkedComponent", () => {
	const user = userEvent.setup();
	const { modelInstance } = modelTestObject;
	beforeEach(() => {
		render(
			<LinkedComponent model={modelTestObject}>
				<></>
			</LinkedComponent>
		);
	});

	it("maps link property to corresponding node", () => {
		const componentElement = screen.getByTestId(ELEMENT_NAME);
		expect(componentElement).toHaveAttribute(
			"data-href",
			modelInstance.link.href
		);
	});

	// UI related ----------------
	it("navigates to link when clicked", async () => {
		const componentElement = screen.getByTestId(ELEMENT_NAME);
		await user.click(componentElement);
		expect(openExternalSite).toHaveBeenCalledWith(modelInstance.link);
	});
});
