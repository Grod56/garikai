import { SiteSubsectionModelInstance } from "./SiteSubsectionModel";

export default function SiteSubsection({
    siteSubsectionModelInstance,
    children
}: {
    siteSubsectionModelInstance: SiteSubsectionModelInstance,
    children: React.ReactNode
}) {
    return (
        <div className={siteSubsectionModelInstance.compositeClassNameString} id={siteSubsectionModelInstance.id}>
            <h4 className="subsection-title">{siteSubsectionModelInstance.subsectionTitle}</h4>
            {children}
        </div>
    );
}