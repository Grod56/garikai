import { ClassName, Model, ModelInstance, ModelInstantiator } from "../../Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "../../ModelIncarnation";

const CLASS_NAME = 'navbar'

export interface NavbarModelInstance extends ModelInstance {
    navbarModelInstanceClassName: ClassName<typeof CLASS_NAME>
}

export interface NavbarModelInstantiator extends ModelInstantiator {
    instantiate(id: string): NavbarModelInstance;
}

export abstract class NavbarModelInstanceIncarnation extends ModelInstanceIncarnation implements NavbarModelInstance {
    constructor(id: string) { 
        super(id)
        this.navbarModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    navbarModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

class _NavbarModelInstanceImplementation extends NavbarModelInstanceIncarnation {
    constructor(readonly id: string){ super(id) }
}

export class NavbarModelInstantiatorImplementation extends ModelInstantiatorIncarnation implements NavbarModelInstantiator {
    instantiate(id: string): NavbarModelInstanceIncarnation {
        return new _NavbarModelInstanceImplementation(id);
    }
}