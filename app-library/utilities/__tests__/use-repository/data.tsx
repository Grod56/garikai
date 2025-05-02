import {
	ContentRepositoryModel,
	ContentRepositoryModelInteraction,
} from "@/app-library/content-repositories/ContentRepositoryModel";
import {
	InstanceInteractionInterface,
	StatifiableNonReadonlyModel,
} from "@/app-library/custom-types/StatifiableNonReadonlyModel";
type ContentModel = {
	id: string;
};
type TestRepositoryModelInstance = {
	contentModels: ContentModel[];
} | null;
type TestRepositoryModelInteraction = ContentRepositoryModelInteraction;
export type TestRepositoryModel = ContentRepositoryModel<
	TestRepositoryModelInstance,
	TestRepositoryModelInteraction
>;
type TestRepositoryInstanceInteractionInterface = InstanceInteractionInterface<
	TestRepositoryModelInstance,
	TestRepositoryModelInteraction
>;

export function testRepositoryModelInstantiator(): TestRepositoryModel &
	StatifiableNonReadonlyModel<
		TestRepositoryModelInstance,
		TestRepositoryModelInteraction,
		TestRepositoryInstanceInteractionInterface
	> {
	return {
		modelInstance: null,
		instanceInteractionInterface: {
			async getModelInstance(interaction) {
				switch (interaction.interactionName) {
					case "RETRIEVE_MODELS":
						return {
							contentModels: [{ id: "67" }, { id: "6543" }],
						};
				}
			},
		},
		interact: jest.fn(),
	};
}

export function faultyTestRepositoryModelInstantiator(
	errorMessage: string
): TestRepositoryModel &
	StatifiableNonReadonlyModel<
		TestRepositoryModelInstance,
		TestRepositoryModelInteraction,
		TestRepositoryInstanceInteractionInterface
	> {
	return {
		modelInstance: null,
		instanceInteractionInterface: {
			getModelInstance: jest.fn(() => {
				return Promise.reject(errorMessage);
			}),
		},
		interact: jest.fn(),
	};
}
