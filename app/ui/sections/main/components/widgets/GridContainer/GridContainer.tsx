import { GridContainerModel } from "./GridContainerModel"

export default function GridContainer({
    gridContainerModel,
    children
} : {
    gridContainerModel: GridContainerModel,
    children: React.ReactNode
}) {

    return (
        <div
            className={gridContainerModel.nameOfClass}
            data-ishorizontal={`${gridContainerModel.isHorizontal}`}
            data-maxxory={`${gridContainerModel.maxXorY}`} // TODO: To be fixed
        >
            {children}
        </div>
    )
}