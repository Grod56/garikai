import Link from "next/link";
import { LinkedImageCardModel } from "./LinkedImageCardModel";
import ImageCard from "../ImageCard";

export default function LinkedImageCard({
    linkedImageCardModel,
    children
}:{
    linkedImageCardModel: LinkedImageCardModel,
    children: React.ReactNode
}) {
    return (
        <Link href={linkedImageCardModel.linkURL.href}>
            <ImageCard imageCardModel={linkedImageCardModel}>
                {children}
            </ImageCard>
        </Link>
    )
}