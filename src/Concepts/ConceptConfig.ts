import { Interval, PRESET_INTERVALS } from "./Interval/IntervalConfig";
import { PRESET_CHORDS } from "./Chord/ChordConfig";
import { PRESET_SCALES } from "./Scale/ScaleConfig";
import { PRESET_MODES } from "./Mode/ModeConfig";
import { Preset, ConceptConfig } from "../Theory/TheoryConfig";

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptDefinition {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
}

export const CONCEPT_DEFINITIONS: ConceptDefinition[] = [
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