import { Interval, PRESET_INTERVALS, INTERVAL } from "./Interval/IntervalConfig";
import { PRESET_CHORDS } from "./Chord/ChordConfig";
import { PRESET_SCALES } from "./Scale/ScaleConfig";
import { PRESET_MODES } from "./Mode/ModeConfig";
import { Preset, ConceptConfig } from "../Theory/TheoryConfig";
import { ChordConfigPanel } from "./Chord/ChordConfigPanel";
import { IntervalConfigPanel } from "./Interval/IntervalConfigPanel";
import { ScaleConfigPanel } from "./Scale/ScaleConfigPanel";

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptDefinition {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
    configComponent: any;
    defaults: any;
}

export const CONCEPT_DEFINITIONS: ConceptDefinition[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: PRESET_INTERVALS,
        configComponent: IntervalConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: PRESET_CHORDS,
        configComponent: ChordConfigPanel,
        defaults: {
            inversion: {
                id: 'none',
                name: 'None',
                rotation: 0
            },
            melodicInversion: false
        }
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: PRESET_SCALES,
        configComponent: ScaleConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: PRESET_MODES,
        configComponent: ScaleConfigPanel,
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: [
            {
                id: 'I',
                name: 'I',
                config: {
                    intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
                }
            },
            {
                id: 'ii',
                name: 'ii',
                config: {
                    intervals: [INTERVAL.M2, INTERVAL.P4, INTERVAL.M6]
                }
            },
            {
                id: 'iii',
                name: 'iii',
                config: {
                    intervals: [INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
                }
            },
            {
                id: 'IV',
                name: 'IV',
                config: {
                    intervals: [INTERVAL.P4, INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU })]
                }
            },
            {
                id: 'V',
                name: 'V',
                config: {
                    intervals: [INTERVAL.P5, INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 })]
                }
            },
            {
                id: 'vi',
                name: 'vi',
                config: {
                    intervals: [INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M3 })]
                }
            },
            {
                id: 'vii',
                name: 'vii',
                config: {
                    intervals: [INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P4 })]
                }
            }
        ],
        configComponent: null,
        defaults: null
    }
];