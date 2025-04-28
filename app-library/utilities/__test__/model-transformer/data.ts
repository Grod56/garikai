import { ModelInteraction } from "@/app-library/custom-types/model/InteractiveModel";
import { InstanceInteractionInterface } from "@/app-library/custom-types/model/MemoizableModel";
import { Model } from "@/app-library/custom-types/model/Model";
import { MemoizableModel } from "@/app-library/custom-types/model/MemoizableModel";

export const memoizableReadonlyModelTestObject: Model<TestModelInstance> = {
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

export const memoizableInteractiveModelTestObject: MemoizableModel<
	TestModelInstance,
	TestInteraction
> = {
	modelInstance: { displayValue: "Hi, this is a test" },
	instanceInteractionInterface: testInstanceInteractionInterface,
};
