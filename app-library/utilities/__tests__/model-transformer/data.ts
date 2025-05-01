import { ModelInteraction } from "@/app-library/custom-types/model/InteractiveModel";
import { InstanceInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { StatifiableNonReadonlyModel } from "@/app-library/custom-types/StatifiableNonReadonlyModel";

interface TestModelInstance {
	displayValue: string;
}

type TestModelInteraction = ModelInteraction<"CHANGE_DISPLAY">;
type TestInstanceInteractionInterface = InstanceInteractionInterface<
	TestModelInstance,
	TestModelInteraction
>;
type TestStatifiableNonReadonlyModel = StatifiableNonReadonlyModel<
	TestModelInstance,
	TestModelInteraction,
	InstanceInteractionInterface<TestModelInstance, TestModelInteraction>
>;

export const statifiableReadonlyModelTestObject: ReadonlyModel<TestModelInstance> =
	{
		modelInstance: { displayValue: "Readonly test" },
	};

export const testInstanceInteractionInterface: TestInstanceInteractionInterface =
	{
		getModelInstance: jest.fn(
			async (interaction: TestModelInteraction) => ({
				displayValue: `${interaction.interactionName} has just been executed!`,
			})
		),
	};

export const statifiableInteractiveModelTestObject: TestStatifiableNonReadonlyModel =
	{
		modelInstance: { displayValue: "Hi, this is a test" },
		instanceInteractionInterface: testInstanceInteractionInterface,
	};
