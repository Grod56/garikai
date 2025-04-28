import { openExternalSite } from "../../../../../utilities/ui";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LinkedComponent from "../LinkedComponent";
import { modelTestObject } from "./data";
jest.mock("../../../../../utilities/ui");

describe("LinkedComponent", () => {
	const user = userEvent.setup();
	beforeEach(() => {
		render(
			<LinkedComponent model={modelTestObject}>
				<></>
			</LinkedComponent>
		);
	});

	it("maps link property to corresponding node", () => {
		const { modelInstance } = modelTestObject;
		const componentElement = screen.getByTestId("linked-component");
		expect(componentElement).toHaveAttribute(
			"data-href",
			modelInstance.link.href
		);
	});

	// UI related ----------------
	it("navigates to link when clicked", async () => {
		const { modelInstance } = modelTestObject;
		const componentElement = screen.getByTestId("linked-component");
		await user.click(componentElement);
		expect(openExternalSite).toHaveBeenCalledWith(modelInstance.link);
	});
});
