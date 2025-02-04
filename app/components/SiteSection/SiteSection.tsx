import { SiteSectionModel } from "./SiteSectionModel";

export default function SiteSection({
    siteSectionModel,
    children,
    ...props
}: {
    siteSectionModel: SiteSectionModel,
    children: React.ReactNode,
    [key: string]: any 
}) {
    return ( 
        <section {...props} className={`${siteSectionModel.nameOfClass} ${props.className ? props.className : ''}`}>
            <div className="section-container">
                <h3 className="section-title">{siteSectionModel.sectionTitle}</h3>
                {children}
            </div>
        </section>
    );
} 