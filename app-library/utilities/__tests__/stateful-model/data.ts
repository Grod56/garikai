import { ModelInteraction } from "@/app-library/custom-types/model/InteractiveModel";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "@/app-library/custom-types/StatifiableModel";

export interface TestModelView {
	displayValue: string;
}

export enum TestModelInteractionType {
	TEST,
}

export type TestModelInteraction = ModelInteraction<TestModelInteractionType>;
export type TestViewInteractionInterface = ViewInteractionInterface<
	TestModelView,
	TestModelInteraction
>;
export type TestStatifiableModel = StatifiableModel<
	ViewInteractionInterface<TestModelView, TestModelInteraction>,
	TestModelView,
	TestModelInteraction
>;

export const testModelView: TestModelView = {
	displayValue: "Testing 213",
};

export const testViewInteractionInterface: TestViewInteractionInterface = {
	getModelView: jest.fn(async (interaction: TestModelInteraction) => ({
		displayValue: `${interaction.type} has just been executed!`,
	})),
};

export const faultyViewInteractionInterface: TestViewInteractionInterface = {
	getModelView: jest.fn(async (_: TestModelInteraction) => {
		throw new Error("Rejected!");
	}),
};

export const testStatifiableModel: TestStatifiableModel = {
	modelView: testModelView,
	viewInteractionInterface: testViewInteractionInterface,
};

export const faultyTestStatifiableModel: TestStatifiableModel = {
	modelView: testModelView,
	viewInteractionInterface: faultyViewInteractionInterface,
};
