import { SiteSubsectionModel } from "./SiteSubsectionModel";

export default function SiteSubsection({
    siteSubsectionModel,
    children,
    ...props
}: {
    siteSubsectionModel: SiteSubsectionModel,
    children: React.ReactNode,
    [key: string]: any
}) {
    return (
        <div {...props} className={`${siteSubsectionModel.nameOfClass} ${props.className ? props.className : ''}`}>
            <h4 className="subsection-title">{siteSubsectionModel.subsectionTitle}</h4>
            {children}
        </div>
    );
}