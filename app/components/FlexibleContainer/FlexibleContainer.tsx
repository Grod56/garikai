import { FlexibleContainerModel } from "./FlexibleContainerModel"

export default function FlexibleContainer({
    flexibleContainerModel,
    children,
    ...props
} : {
    flexibleContainerModel: FlexibleContainerModel,
    children: React.ReactNode,
    [key: string]: any
}) {
    return (
    <div {...props} className={flexibleContainerModel.nameOfClass}>
        {children}
    </div>
    )
}