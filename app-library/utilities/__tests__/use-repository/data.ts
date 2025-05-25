import {
	RepositoryInteractionType,
	RepositoryModel,
	RepositoryModelInteraction,
} from "@/app-library/content-repositories/repository";
import { StatifiableModel } from "@mvc-react/stateful";
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

export const testStatifiableRepositoryModel: StatifiableModel<
	TestRepositoryModelView,
	TestRepositoryModelInteraction
> = {
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
};

// export function getFaultyTestStatifiableRepositoryModel(
// 	errorMessage: string
// ): StatifiableModel<TestRepositoryModelView, TestRepositoryModelInteraction> {
// 	return {
// 		modelView: null,
// 		viewInteractionInterface: {
// 			produceModelView: jest.fn(() => {
// 				return Promise.reject(errorMessage);
// 			}),
// 		},
// 	};
// }
