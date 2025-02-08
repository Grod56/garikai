export default function Content({
    children,
    ...props
} : {
    children: React.ReactNode,
    [key: string]: any
}) {

    return (
        <main {...props} className={`content`}>
            {children}
        </main>
    );
}