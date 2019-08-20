import { NoteLabel, CompleteNote } from "../Common/Theory.config";

export interface Viewer {
    component: any;
}

export interface ViewerConfig {
    filterOctave: boolean;
    noteLabel: NoteLabel;
    /*[property: string]: any;*/
}

export interface ViewerProps {
    notes: CompleteNote[];
    config: ViewerConfig;
}