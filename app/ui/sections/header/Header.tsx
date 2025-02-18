import { HeaderModel } from "./HeaderModel";

export default function Header({
    headerModel
} : {
    headerModel: HeaderModel
}) {
    return (
        <header className={headerModel.nameOfClass}>
            <div className="header-container">
                <div className="hero">
                    <h1 className="title">
                        {headerModel.headerTitle}
                    </h1>
                    <h2 className="subtitle">
                        {headerModel.headerSubtitle}
                    </h2>
                </div>
            </div>
        </header>
    );
}