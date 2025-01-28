export default function SiteSection({
    sectionTitle,
    children,
    ...props
}: {
    sectionTitle: string,
    children: React.ReactNode,
    [key: string]: any 
}) {
    return ( 
        <section {...props} className={`site-section ${props.className ? props.className : ''}`}>
            <div className="section-container">
                <h3 className="section-title">{sectionTitle}</h3>
                {children}
            </div>
        </section>
    );
} 