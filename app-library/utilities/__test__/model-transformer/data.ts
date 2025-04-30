import { ModelInteraction } from "@/app-library/custom-types/model/InteractiveModel";
import { InstanceInteractionInterface } from "@/app-library/custom-types/StatifiableNonReadonlyModel";
import { ReadonlyModel } from "@/app-library/custom-types/model/ReadonlyModel";
import { StatifiableNonReadonlyModel } from "@/app-library/custom-types/StatifiableNonReadonlyModel";

export const memoizableReadonlyModelTestObject: ReadonlyModel<TestModelInstance> =
	{
		modelInstance: { displayValue: "Readonly test" },
	};

export interface TestModelInstance {
	displayValue: string;
}

export type TestInteraction = ModelInteraction<"CHANGE_DISPLAY">;

export const testInstanceInteractionInterface: InstanceInteractionInterface<
	TestModelInstance,
	TestInteraction
> = {
	getModelInstance: jest.fn(async (interaction: TestInteraction) => ({
		displayValue: `${interaction.interactionName} has just been executed!`,
	})),
};

export const memoizableInteractiveModelTestObject: StatifiableNonReadonlyModel<
	InstanceInteractionInterface<TestModelInstance, TestInteraction>,
	TestModelInstance,
	TestInteraction
> = {
	modelInstance: { displayValue: "Hi, this is a test" },
	instanceInteractionInterface: testInstanceInteractionInterface,
};
