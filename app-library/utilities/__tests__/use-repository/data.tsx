import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
	RepositoryModelView,
} from "@/app-library/content-repositories/RepositoryModel";
import {
	ViewInteractionInterface,
	StatifiableNonReadonlyModel,
} from "@/app-library/custom-types/StatifiableNonReadonlyModel";
export type ContentModel = {
	id: string;
};
export type TestRepositoryModelView = RepositoryModelView<{
	contentModels: ContentModel[];
}>;
export type TestRepositoryModelInteraction = RepositoryModelInteraction;
export type TestRepositoryModel = RepositoryModel<
	TestRepositoryModelView,
	TestRepositoryModelInteraction
>;
export type TestRepositoryViewInteractionInterface = ViewInteractionInterface<
	TestRepositoryModelView,
	TestRepositoryModelInteraction
>;

export function testRepositoryModelInstantiator(): TestRepositoryModel &
	StatifiableNonReadonlyModel<
		TestRepositoryModelView,
		TestRepositoryModelInteraction,
		TestRepositoryViewInteractionInterface
	> {
	return {
		modelView: null,
		viewInteractionInterface: {
			async getModelView(interaction) {
				switch (interaction.type) {
					case RepositoryInteractionType.RETRIEVE:
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
		TestRepositoryModelView,
		TestRepositoryModelInteraction,
		TestRepositoryViewInteractionInterface
	> {
	return {
		modelView: null,
		viewInteractionInterface: {
			getModelView: jest.fn(() => {
				return Promise.reject(errorMessage);
			}),
		},
		interact: jest.fn(),
	};
}
