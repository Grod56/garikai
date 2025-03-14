import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "../../ModelIncarnation";

const CLASS_NAME = 'main'

export interface MainModelInstance extends ModelInstance {
    readonly mainModelInstanceClassName: ClassName<typeof CLASS_NAME>
}

export interface MainModelInstantiator extends ModelInstantiator {
    instantiate(id: any): MainModelInstance;
}

export abstract class MainModelInstanceIncarnation extends ModelInstanceIncarnation implements MainModelInstance {
    constructor(id: string) {
        super(id);
        this.mainModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    mainModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class MainModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements MainModelInstantiator {
    abstract instantiate(id: any): MainModelInstanceIncarnation;
}

class _MainModelInstanceImplementation extends MainModelInstanceIncarnation implements MainModelInstance {
    constructor(readonly id: string){ super(id) }
}

export class MainModelInstantiatorImplementation extends MainModelInstantiatorIncarnation {
    instantiate(id: string): MainModelInstanceIncarnation {
        return new _MainModelInstanceImplementation(id);
    }
}