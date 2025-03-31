import {
	ClassName,
	ModelInstance,
	ModelInstantiator,
} from "@/app/components/Model";
import {
	ModelInstanceIncarnation,
	ModelInstantiatorIncarnation,
} from "@/app/components/ModelIncarnation";

export const CLASS_NAME = "site-section";

export interface SiteSectionModelInstance extends ModelInstance {
	readonly sectionName: string;
	readonly sectionTitle: string;
}

export interface SiteSectionModelInstantiator extends ModelInstantiator {
	instantiate({
		id,
		sectionName,
		sectionTitle,
	}: {
		id: string;
		sectionName: string;
		sectionTitle: string;
	}): SiteSectionModelInstance;
}

export abstract class SiteSectionModelInstanceIncarnation
	extends ModelInstanceIncarnation
	implements SiteSectionModelInstance
{
	constructor(
		id: string,
		readonly sectionName: string,
		readonly sectionTitle: string
	) {
		super(id);
		this.siteSectionModelInstanceClassName = {
			getClassNameString: CLASS_NAME,
		};
	}
	readonly siteSectionModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class SiteSectionModelInstantiatorIncarnation
	extends ModelInstantiatorIncarnation
	implements SiteSectionModelInstantiator
{
	abstract instantiate({
		id,
		sectionName,
		sectionTitle,
	}: {
		id: string;
		sectionName: string;
		sectionTitle: string;
	}): SiteSectionModelInstanceIncarnation;
}

class _SiteSectionModelInstanceIncarnationImplementation extends SiteSectionModelInstanceIncarnation {
	constructor(id: string, sectionName: string, sectionTitle: string) {
		super(id, sectionName, sectionTitle);
	}
}

class _SiteSectionModelInstantiatorIncarnationImplementation extends SiteSectionModelInstantiatorIncarnation {
	instantiate({
		id,
		sectionName,
		sectionTitle,
	}: {
		id: string;
		sectionName: string;
		sectionTitle: string;
	}): SiteSectionModelInstanceIncarnation {
		return new _SiteSectionModelInstanceIncarnationImplementation(
			id,
			sectionName,
			sectionTitle
		);
	}
}

export default new _SiteSectionModelInstantiatorIncarnationImplementation() as SiteSectionModelInstantiator;
