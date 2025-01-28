export default function Content({
    children,
    ...props
} : {
    children: React.ReactNode,
    [key: string]: any
}) {

    return (
        <main {...props} className={`content ${props.className ? props.className : ''}`}>
            {children}
        </main>
    );
}