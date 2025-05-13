import { Model } from "../custom-types/model/Model";

export function compositeClassNameResolver(...classNames: string[]): string {
	return classNames.join(" ");
}

export function removeMarkup(markedUpText: string): string {
	const regex: RegExp = /(<([^>]+)>)/gi;
	return markedUpText.replace(regex, "");
}

export type DeepInferModel<M extends Model<U>, U extends object> = T & Model<U>;
