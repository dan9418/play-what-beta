import { Interval, PRESET_INTERVALS } from "./IntervalConfig";
import { PRESET_CHORDS } from "./ChordConfig";
import { PRESET_SCALES } from "./ScaleConfig";
import { PRESET_MODES } from "./ModeConfig";
import { Preset, ConceptConfig } from "../Theory/TheoryDefinitions";

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptType {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
}

export const ALL_CONCEPTS: ConceptType[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: PRESET_INTERVALS
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: PRESET_CHORDS
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: PRESET_SCALES
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: PRESET_MODES
    },
    /*{
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: null
    }*/
];