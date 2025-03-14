import { SiteSectionModelInstance } from "./SiteSectionModel";

export default function SiteSection({
    siteSectionModelInstance,
    bottomRule = true,
    children
}: {
    siteSectionModelInstance: SiteSectionModelInstance,
    bottomRule?: boolean, // TODO: To be fixed
    children: React.ReactNode
}) {
    return ( 
        <section 
            className={siteSectionModelInstance.compositeClassNameString}
            id={siteSectionModelInstance.id}
            data-name={siteSectionModelInstance.name}
        >
            <div className="background-layer">
                <div className="content-layer">
                    <h3 className="section-title">{siteSectionModelInstance.sectionTitle}</h3>
                    {children}
                </div>
                {bottomRule ? <hr /> : <></>}
            </div>
        </section>
    );
} 