import { GeneralComponent } from "@/app-library/custom-types/Miscellaneous";
import { Model } from "@/app-library/custom-types/model/Model";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { useState } from "react";
import { ComponentPlaceholderModel } from "../ComponentPlaceholderModel";

type TestPlaceholderedComponentModelView = {
	text: string;
};

export type TestPlaceholderedComponentModel =
	Model<TestPlaceholderedComponentModelView>;

export function useTestData(
	PlaceholderedComponent: ModeledVoidComponent<TestPlaceholderedComponentModel>,
	PlaceholderComponent: GeneralComponent
) {
	const [placeholderedComponentModel, setPlaceholderedComponentModel] =
		useState<TestPlaceholderedComponentModel | undefined>(undefined);
	const testModel: ComponentPlaceholderModel<TestPlaceholderedComponentModel> =
		{
			modelView: {
				placeholderedComponentModel: placeholderedComponentModel,
				PlaceholderedComponent: PlaceholderedComponent,
				PlaceholderComponent: PlaceholderComponent,
			},
		};

	return { testModel, setPlaceholderedComponentModel };
}
