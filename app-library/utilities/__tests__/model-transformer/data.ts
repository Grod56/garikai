import { ModelInteraction } from "@/app-library/custom-types/model/InteractiveModel";
import { ViewInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { StatifiableNonReadonlyModel } from "@/app-library/custom-types/StatifiableNonReadonlyModel";

export interface TestModelView {
	displayValue: string;
}

export type TestModelInteraction = ModelInteraction<"CHANGE_DISPLAY">;
export type TestViewInteractionInterface = ViewInteractionInterface<
	TestModelView,
	TestModelInteraction
>;
export type TestStatifiableNonReadonlyModel = StatifiableNonReadonlyModel<
	TestModelView,
	TestModelInteraction,
	ViewInteractionInterface<TestModelView, TestModelInteraction>
>;

export const statifiableReadonlyModelTestObject: ReadonlyModel<TestModelView> =
	{
		modelView: { displayValue: "Readonly test" },
	};

export const testViewInteractionInterface: TestViewInteractionInterface = {
	getModelView: jest.fn(async (interaction: TestModelInteraction) => ({
		displayValue: `${interaction.type} has just been executed!`,
	})),
};

export const statifiableInteractiveModelTestObject: TestStatifiableNonReadonlyModel =
	{
		modelView: { displayValue: "Hi, this is a test" },
		viewInteractionInterface: testViewInteractionInterface,
	};
