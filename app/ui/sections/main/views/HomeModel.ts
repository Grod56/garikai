const _NAME_OF_CLASS: string = 'home';

import { MainModel } from "../MainModel";

export class HomeModel extends MainModel {

    public get nameOfClass(): string {
        return `${super.nameOfClass} ${_NAME_OF_CLASS}`
    }

}