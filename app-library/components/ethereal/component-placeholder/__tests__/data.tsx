import { Model } from "@/app-library/custom-types/model/Model";
import { ModeledVoidComponent } from "@/app-library/custom-types/ModeledComponent";
import { JSX, useState } from "react";
import { ComponentPlaceholderModel } from "../ComponentPlaceholderModel";

type TestPlaceholderedComponentModelView = {
	text: string;
};

export type TestPlaceholderedComponentModel =
	Model<TestPlaceholderedComponentModelView>;

export function useTestData(
	PlaceholderedComponent: ModeledVoidComponent<TestPlaceholderedComponentModel>,
	PlaceholderComponent: () => JSX.Element
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
