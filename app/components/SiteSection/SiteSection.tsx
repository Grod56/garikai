import { SiteSectionModel } from "./SiteSectionModel";

export default function SiteSection({
    siteSectionModel,
    children
}: {
    siteSectionModel: SiteSectionModel,
    children: React.ReactNode
}) {
    return ( 
        <section className={siteSectionModel.nameOfClass} id={siteSectionModel.id}>
            <div className="section-container">
                <h3 className="section-title">{siteSectionModel.sectionTitle}</h3>
                {children}
            </div>
        </section>
    );
} 