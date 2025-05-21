import { ArtImagePreviewAPI } from "@/app-library/content-apis/ArtImagePreviewAPI";
import { ReadonlyModel } from "@mvc-react/mvc";
import { SectionModelView } from "../SectionModel";

export interface ArtSectionView extends SectionModelView {
	artImagePreviewAPI: ArtImagePreviewAPI;
}

export type ArtSectionModel = ReadonlyModel<ArtSectionView>;
