import {
	ClassName,
	CorporealComponentModelInstance,
	CorporealComponentModelInstantiator,
} from "@/app/components/corporeal/CorporealComponentModel";
import {
	CorporealComponentModelInstanceIncarnation,
	CorporealComponentModelInstantiatorIncarnation,
} from "../../CorporealComponentModel";

export const CLASS_NAME = "site-section";

export interface SiteSectionModelInstance
	extends CorporealComponentModelInstance {
	readonly sectionName: string;
	readonly sectionTitle: string;
}

export interface SiteSectionModelInstantiator
	extends CorporealComponentModelInstantiator {
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
	extends CorporealComponentModelInstanceIncarnation
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
	extends CorporealComponentModelInstantiatorIncarnation
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
