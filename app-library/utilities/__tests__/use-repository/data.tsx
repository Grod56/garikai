import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
} from "@/app-library/content-repositories/RepositoryModel";
import {
	ViewInteractionInterface,
	StatifiableModel,
} from "@mvc-react/stateful";
export type ContentModel = {
	id: string;
};
export type TestRepositoryModelView = {
	contentModels: ContentModel[];
};
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
	StatifiableModel<
		TestRepositoryViewInteractionInterface,
		TestRepositoryModelView
	> {
	return {
		modelView: null,
		viewInteractionInterface: {
			produceModelView(interaction) {
				switch (interaction.type) {
					case RepositoryInteractionType.RETRIEVE:
						return Promise.resolve({
							contentModels: [{ id: "67" }, { id: "6543" }],
						});
				}
			},
		},
		interact: jest.fn(),
	};
}

export function faultyTestRepositoryModelInstantiator(
	errorMessage: string
): TestRepositoryModel &
	StatifiableModel<
		TestRepositoryViewInteractionInterface,
		TestRepositoryModelView
	> {
	return {
		modelView: null,
		viewInteractionInterface: {
			produceModelView: jest.fn(() => {
				return Promise.reject(errorMessage);
			}),
		},
		interact: jest.fn(),
	};
}
