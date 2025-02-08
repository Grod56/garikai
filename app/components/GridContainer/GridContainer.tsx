import { GridContainerModel } from "./GridContainerModel"

export default function GridContainer({
    gridContainerModel,
    children,
    ...props
} : {
    gridContainerModel: GridContainerModel,
    children: React.ReactNode,
    [key: string]: any
}) {

    return (
        <div 
            {...props}
            className={`grid-container ${gridContainerModel.isHorizontal ? '' : 'vertical'} ${gridContainerModel.isOverflow ? 'overflow' : ''}`}
            style={{
                gridTemplateRows: `${gridContainerModel.isHorizontal ? `inherit` : `repeat(${gridContainerModel.maxXorY}, 1fr)`}`,
                gridTemplateColumns: `${gridContainerModel.isHorizontal ? `repeat(${gridContainerModel.maxXorY}, 1fr)` : `inherit`}`
            }}
        >
            {children}
        </div>
    )
}