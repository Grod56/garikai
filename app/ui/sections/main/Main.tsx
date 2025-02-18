import { MainModel } from "./MainModel";

export default function Main({
    mainModel,
    children
} : {
    mainModel: MainModel,
    children: React.ReactNode
}) {

    return (
        <main className={mainModel.nameOfClass}>
            {children}
        </main>
    );
}