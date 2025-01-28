export default function GridContainer({
    maxXorY,
    isHorizontal,
    isOverflow,
    children,
    ...props
} : {
    maxXorY: number,
    isHorizontal: boolean,
    isOverflow: boolean,
    children: React.ReactNode,
    [key: string]: any
}) {

    return (
        <div 
            {...props}
            className={`grid-container ${isHorizontal ? '' : 'vertical'} ${isOverflow ? 'overflow' : ''} ${props.className ? props.className : ''}`}
            style={{
                gridTemplateRows: `${isHorizontal ? `inherit` : `repeat(${maxXorY}, 1fr)`}`,
                gridTemplateColumns: `${isHorizontal ? `repeat(${maxXorY}, 1fr)` : `inherit`}`
            }}
        >
            {children}
        </div>
    )
}