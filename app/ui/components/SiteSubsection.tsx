export default function SiteSubsection({
    subsectionTitle,
    children,
    ...props
}: {
    subsectionTitle: string,
    children: React.ReactNode,
    [key: string]: any
}) {
    return (
        <div {...props} className={`site-subsection ${props.className ? props.className : ''}`}>
            <h4 className="subsection-title">{subsectionTitle}</h4>
            {children}
        </div>
    );
}