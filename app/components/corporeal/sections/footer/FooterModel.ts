import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "../../CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

const CLASS_NAME = "footer";

export interface FooterModelInstance extends CorporealComponentModelInstance {
	readonly copyright: string;
}

export interface FooterModelInstantiator
	extends CorporealComponentModelInstantiator {
	instantiate({
		id,
		copyrightText,
	}: {
		id: string;
		copyrightText: string;
	}): FooterModelInstance;
}

export abstract class FooterModelInstanceIncarnation
	extends CorporealComponentModelInstanceIncarnation
	implements FooterModelInstance
{
	constructor(
		id: string,
		private readonly copyrightText: string
	) {
		super(id);
		this.footerModelInstanceClassName = { getClassNameString: CLASS_NAME };
	}
	readonly footerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
	get copyright(): string {
		return `© ${new Date(Date.now()).toLocaleDateString("en-US", { year: "numeric" })} ${this.copyrightText}`;
	}
}

export abstract class FooterModelInstantiatorIncarnation
	extends CorporealComponentModelInstantiatorIncarnation
	implements FooterModelInstantiator
{
	abstract instantiate({
		id,
		copyrightText,
	}: {
		id: string;
		copyrightText: string;
	}): FooterModelInstanceIncarnation;
}

class _FooterModelInstanceImplementation extends FooterModelInstanceIncarnation {
	constructor({ id, copyrightText }: { id: string; copyrightText: string }) {
		super(id, copyrightText);
	}
}

class _FooterModelInstantiatorImplementation extends FooterModelInstantiatorIncarnation {
	instantiate({
		id,
		copyrightText,
	}: {
		id: string;
		copyrightText: string;
	}): FooterModelInstanceIncarnation {
		return new _FooterModelInstanceImplementation({ id, copyrightText });
	}
}

export default new _FooterModelInstantiatorImplementation() as FooterModelInstantiator;
