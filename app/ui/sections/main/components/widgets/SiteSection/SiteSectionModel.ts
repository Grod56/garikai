import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = 'site-section';

export interface SiteSectionModelInstance extends ModelInstance {
    readonly siteSectionModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly name: string;
    readonly sectionTitle: string;
}

export interface SiteSectionModelInstantiator extends ModelInstantiator {
    instantiate(id: string, name: string, sectionTitle: string): SiteSectionModelInstance;
}

export abstract class SiteSectionModelInstanceIncarnation extends ModelInstanceIncarnation implements SiteSectionModelInstance {
    constructor(id: string, readonly name: string, readonly sectionTitle: string) {
        super(id);
        this.siteSectionModelInstanceClassName = { getClassNameString: CLASS_NAME };
    }
    readonly siteSectionModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class SiteSectionModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements SiteSectionModelInstantiator {
    abstract instantiate(id: string, name: string, sectionTitle: string): SiteSectionModelInstanceIncarnation;
}

class _SiteSectionModelInstanceIncarnationImplementation extends SiteSectionModelInstanceIncarnation {
    constructor(id: string, name: string, sectionTitle: string){ super(id, name, sectionTitle) }
}

export class SiteSectionModelInstantiatorIncarnationImplementation extends SiteSectionModelInstantiatorIncarnation {
    instantiate(id: string, name: string, sectionTitle: string): SiteSectionModelInstanceIncarnation {
        return new _SiteSectionModelInstanceIncarnationImplementation(id, name, sectionTitle);
    }
}