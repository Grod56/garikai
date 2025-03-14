import { ClassName, ModelInstance, ModelInstantiator } from "@/app/ui/Model";
import { ModelInstanceIncarnation, ModelInstantiatorIncarnation } from "@/app/ui/ModelIncarnation";

export const CLASS_NAME = 'image-card-skeleton';

export interface ImageCardSkeletonModelInstance extends ModelInstance {
    readonly imageCardSkeletonModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export interface ImageCardSkeletonModelInstantiator extends ModelInstantiator {
    instantiate(id: string): ImageCardSkeletonModelInstance;
}

export abstract class ImageCardSkeletonModelInstanceIncarnation extends ModelInstanceIncarnation implements ImageCardSkeletonModelInstance {
    constructor(id: string) {
        super(id);
        this.imageCardSkeletonModelInstanceClassName = { getClassNameString: CLASS_NAME }
    }
    readonly imageCardSkeletonModelInstanceClassName: ClassName<typeof CLASS_NAME>;
}

export abstract class ImageCardSkeletonModelInstantiatorIncarnation extends ModelInstantiatorIncarnation implements ImageCardSkeletonModelInstantiator {
    abstract instantiate(id: string, ...args: any[]): ImageCardSkeletonModelInstanceIncarnation;
}

class _ImageCardSkeletonModelInstanceIncarnationImplementation extends ImageCardSkeletonModelInstanceIncarnation {
    constructor(id: string){ super(id) }
}

export class ImageCardSkeletonModelInstantiatorIncarnationImplementation extends ImageCardSkeletonModelInstantiatorIncarnation {
    instantiate(id: string): ImageCardSkeletonModelInstanceIncarnation {
        return new _ImageCardSkeletonModelInstanceIncarnationImplementation(id);
    }
}

