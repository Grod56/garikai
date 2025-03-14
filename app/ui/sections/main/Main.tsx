'use client'
import { MainModelInstance } from "./MainModel";

export default function Main({
    mainModelInstance,
    children
} : {
    mainModelInstance: MainModelInstance,
    children: React.ReactNode
}) {

    return (
        <main
            className={mainModelInstance.compositeClassNameString}
            id={mainModelInstance.id}
        >
            {children}
        </main>
    );
}