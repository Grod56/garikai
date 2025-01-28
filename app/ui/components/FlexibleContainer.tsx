export default function FlexibleContainer({
    children,
    ...props
} : {
    children: React.ReactNode,
    [key: string]: any
}) {
    return (
    <div {...props} className="flexible-container">
        {children}
    </div>
    )
}