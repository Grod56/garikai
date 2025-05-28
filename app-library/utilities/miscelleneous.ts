import { ModelInteraction, ModelView } from "@mvc-react/mvc";
import {
	StatifiableModel,
	ViewInteractionInterface,
} from "@mvc-react/stateful";

export function compositeClassNameResolver(...classNames: string[]): string {
	return classNames.join(" ");
}

export function removeMarkup(markedUpText: string): string {
	const regex: RegExp = /(<([^>]+)>)/gi;
	return markedUpText.replace(regex, "");
}

export function newStatifiableModel<
	V extends ModelView,
	I extends ModelInteraction<U>,
	U = unknown,
>(
	viewInteractionInterface: ViewInteractionInterface<V, I>,
): StatifiableModel<V, I> {
	return { modelView: null, viewInteractionInterface };
}
