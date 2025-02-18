import { SiteSectionModel } from "./SiteSectionModel";

export default function SiteSection({
    siteSectionModel,
    bottomRule = true,
    children
}: {
    siteSectionModel: SiteSectionModel,
    bottomRule?: boolean,
    children: React.ReactNode
}) {
    return ( 
        <section className={siteSectionModel.nameOfClass} id={siteSectionModel.id}>
            <div className="background-layer">
                <div className="content-layer">
                    <h3 className="section-title">{siteSectionModel.sectionTitle}</h3>
                    {children}
                </div>
                {bottomRule ? <hr /> : <></>}
            </div>
        </section>
    );
} 