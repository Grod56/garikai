import { FlexibleContainerModelInstance } from "./FlexibleContainerModel"

export default function FlexibleContainer({
    flexibleContainerModelInstance,
    children
} : {
    flexibleContainerModelInstance: FlexibleContainerModelInstance,
    children: React.ReactNode
}) {
    return (
    <div 
        className={flexibleContainerModelInstance.compositeClassNameString}
        id={flexibleContainerModelInstance.id}
    >
        {children}
    </div>
    )
}