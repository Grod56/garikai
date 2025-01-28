export default function Header({
    headerTitle,
    headerSubtitle
} : {
    headerTitle: string,
    headerSubtitle: string
}) {
    return (
        <header className="header">
            <div className="header-container">
                <div className="hero">
                    <h1 className="title">
                        {headerTitle}
                    </h1>
                    <h2 className="subtitle">
                        {headerSubtitle}
                    </h2>
                </div>
            </div>
        </header>
    );
}