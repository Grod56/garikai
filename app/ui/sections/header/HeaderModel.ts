import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "../../ModelIncarnation";

const CLASS_NAME = "header";

export interface HeaderModelInstance extends ModelInstance {
	readonly headerTitle: string;
	readonly headerSubtitle: string;
}

export interface HeaderModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		headerTitle,
		headerSubtitle,
	}: {
		id: string;
		headerTitle: string;
		headerSubtitle: string;
	}): HeaderModelInstance;
}

export abstract class HeaderModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements HeaderModelInstance
{
	constructor(
		id: string,
		readonly headerTitle: string,
		readonly headerSubtitle: string
	) {
		super(id);
		this.headerModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	readonly headerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class HeaderModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements HeaderModelInstantiator
{
	abstract instantiate({
		id,
		headerTitle,
		headerSubtitle,
	}: {
		id: string;
		headerTitle: string;
		headerSubtitle: string;
	}): HeaderModelInstanceIncarnation;
}

class _HeaderModelInstanceImplementation extends HeaderModelInstanceIncarnation {
	constructor({
		id,
		headerTitle,
		headerSubtitle,
	}: {
		id: string;
		headerTitle: string;
		headerSubtitle: string;
	}) {
		super(id, headerTitle, headerSubtitle);
	}
}

class _HeaderModelInstantiatorImplementation extends HeaderModelInstantiatorIncarnation {
	instantiate({
		id,
		headerTitle,
		headerSubtitle,
	}: {
		id: string;
		headerTitle: string;
		headerSubtitle: string;
	}): HeaderModelInstanceIncarnation {
		return new _HeaderModelInstanceImplementation({
			id,
			headerTitle,
			headerSubtitle,
		});
	}
}

export default new _HeaderModelInstantiatorImplementation() as HeaderModelInstantiator;
