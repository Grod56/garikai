const _NAME_OF_CLASS: string = 'grid-container';

export class GridContainerModel implements Model {
    private _maxXorY: number;
    public get maxXorY(): number {
        return this._maxXorY;
    }
    private _isHorizontal: boolean;
    public get isHorizontal(): boolean {
        return this._isHorizontal;
    }
    private _isOverflow: boolean;
    public get isOverflow(): boolean {
        return this._isOverflow;
    }

    constructor(
        maxXorY: number,
        isHorizontal: boolean,
        isOverflow: boolean
    ){
        this._maxXorY = maxXorY;
        this._isHorizontal = isHorizontal;
        this._isOverflow = isOverflow;
    }

    nameOfClass: string = _NAME_OF_CLASS;
}