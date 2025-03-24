import {
	ClassName,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

const CLASS_NAME = "site-subsection";

export interface SiteSubsectionModelInstance extends ModelInstance {
	readonly subsectionTitle: string;
}

export interface SiteSubsectionModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		subsectionTitle,
	}: {
		id: string;
		subsectionTitle: string;
	}): SiteSubsectionModelInstance;
}

export abstract class SiteSubsectionModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements SiteSubsectionModelInstance
{
	constructor(
		id: string,
		readonly subsectionTitle: string
	) {
		super(id);
		this.siteSubsectionModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly siteSubsectionModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class SiteSubsectionModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements SiteSubsectionModelInstantiator
{
	abstract instantiate({
		id,
		subsectionTitle,
	}: {
		id: string;
		subsectionTitle: string;
	}): SiteSubsectionModelInstanceIncarnation;
}

class _SiteSubsectionModelInstanceIncarnationImplementation extends SiteSubsectionModelInstanceIncarnation {
	constructor(id: string, subsectionTitle: string) {
		super(id, subsectionTitle);
	}
}

class _SiteSubsectionModelInstantiatorIncarnationImplementation extends SiteSubsectionModelInstantiatorIncarnation {
	instantiate({
		id,
		subsectionTitle,
	}: {
		id: string;
		subsectionTitle: string;
	}): SiteSubsectionModelInstanceIncarnation {
		return new _SiteSubsectionModelInstanceIncarnationImplementation(
			id,
			subsectionTitle
		);
	}
}

export default new _SiteSubsectionModelInstantiatorIncarnationImplementation() as SiteSubsectionModelInstantiator;
