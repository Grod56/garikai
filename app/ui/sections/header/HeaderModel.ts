import { ClassName, ModelInstance, ModelInstantiator } from "../../Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "../../ModelIncarnation";

export const CLASS_NAME = 'header'

export interface HeaderModelInstance extends ModelInstance {
    readonly headerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
    readonly headerTitle: string;
    readonly headerSubtitle: string;
}

export interface HeaderModelInstantiator extends ModelInstantiator {
    instantiate(id: string, headerTitle: string, headerSubtitle: string): HeaderModelInstance; 
}

export abstract class HeaderModelInstanceIncarnation extends ModelInstanceIncarnation implements HeaderModelInstance {
    constructor(id: string, readonly headerTitle: string, readonly headerSubtitle: string) {
        super(id);
        this.headerModelInstanceClassName = {getClassNameString: CLASS_NAME}
    }

    headerModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class HeaderModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements HeaderModelInstantiator {
    abstract instantiate(...args: any[]): HeaderModelInstanceIncarnation;
}

class _HeaderModelInstanceImplementation extends HeaderModelInstanceIncarnation {
    constructor(id: string, headerTitle: string, headerSubtitle: string) { 
        super(id, headerTitle, headerSubtitle);
    }
}

export class HeaderModelInstantiatorImplementation extends HeaderModelInstantiatorIncarnation {
    instantiate(id: string, headerTitle: string, headerSubtitle: string): HeaderModelInstanceIncarnation {
        return new _HeaderModelInstanceImplementation(id, headerTitle, headerSubtitle);
    }
}