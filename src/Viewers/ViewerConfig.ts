import { NoteSummarySet } from "./SummaryView/NoteSummarySet";
import { Piano } from "./PianoView/Piano";
import { Guitar } from "./GuitarView/Guitar";
import { PRESETS_GUITAR_CONFIG } from "./GuitarView/GuitarConfig";
import { PRESETS_PIANO_CONFIG } from "./PianoView/PianoConfig";
import { PRESETS_NOTE_SUMMARY_CONFIG } from "./SummaryView/NoteSummaryConfig";
import { Preset } from "../Common/Theory/TheoryConfig";
import { PianoConfigPanel } from "./PianoView/PianoConfigPanel";
import { SummaryConfigPanel } from "./SummaryView/SummaryConfigPanel";

export interface ViewerType {
    id: string;
    name: string;
    component: any;
    configComponent?: any;
    presets: Preset<any>[];
}

export const ALL_VIEWERS: ViewerType[] = [
    {
        id: 'summary',
        name: 'Summary',
        component: NoteSummarySet,
        configComponent: SummaryConfigPanel,
        presets: PRESETS_NOTE_SUMMARY_CONFIG
    },
    {
        id: 'piano',
        name: 'Piano',
        component: Piano,
        configComponent: PianoConfigPanel,
        presets: PRESETS_PIANO_CONFIG
    },
    {
        id: 'neck',
        name: 'Neck',
        component: Guitar,
        presets: PRESETS_GUITAR_CONFIG
    }
];