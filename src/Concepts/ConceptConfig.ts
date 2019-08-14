import { Interval, PRESET_INTERVALS, INTERVAL } from "./Interval/IntervalConfig";
import { PRESET_CHORDS, PRESET_CHORD_INVERSIONS } from "./Chord/ChordConfig";
import { PRESET_SCALES } from "./Scale/ScaleConfig";
import { PRESET_MODES } from "./Mode/ModeConfig";
import { Preset, ConceptConfig } from "../Theory/TheoryConfig";
import { SwitchSelector } from "../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { PRESETS_ROMAN_NUMERAL } from "./RomanNumeral/RomanNumeralConfig";
import { BoxSelector } from "../InputPanel/Selectors/BoxSelector/BoxSelector";

export interface Concept {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptDefinition {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
    options: OptionInput[];
    defaults: any;
}

export interface OptionInput {
    propertyId: string;
    label: string;
    component: any;
    props: any;
}

export const CONCEPT_DEFINITIONS: ConceptDefinition[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: PRESET_INTERVALS,
        options: [
            {
                propertyId: 'melodicInversion',
                label: 'Melodic Inversion',
                component: SwitchSelector,
                props: {}
            },
            {
                propertyId: 'reverse',
                label: 'Reverse',
                component: SwitchSelector,
                props: {}
            }
        ],
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: PRESET_CHORDS,
        options: [
            {
                propertyId: 'inversion',
                label: 'Chord Inversion',
                component: BoxSelector,
                props: {
                    data: PRESET_CHORD_INVERSIONS,
                    displayProp: 'rotation'
                }
            },
            {
                propertyId: 'melodicInversion',
                label: 'Melodic Inversion',
                component: SwitchSelector,
                props: {}
            }
        ],
        defaults: {
            inversion: PRESET_CHORD_INVERSIONS[0],
            melodicInversion: false
        }
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: PRESET_SCALES,
        options: [
            {
                propertyId: 'melodicInversion',
                label: 'Melodic Inversion',
                component: SwitchSelector,
                props: {}
            },
            {
                propertyId: 'reverse',
                label: 'Reverse',
                component: SwitchSelector,
                props: {}
            }
        ],
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: PRESET_MODES,
        options: [
            {
                propertyId: 'melodicInversion',
                label: 'Melodic Inversion',
                component: SwitchSelector,
                props: {}
            },
            {
                propertyId: 'reverse',
                label: 'Reverse',
                component: SwitchSelector,
                props: {}
            }
        ],
        defaults: {
            melodicInversion: false,
            reverse: false
        }
    },
    {
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: PRESETS_ROMAN_NUMERAL,
        options: [
            {
                propertyId: 'inversion',
                label: 'Chord Inversion',
                component: BoxSelector,
                props: {
                    data: PRESET_CHORD_INVERSIONS,
                    displayProp: 'rotation'
                }
            },
            {
                propertyId: 'melodicInversion',
                label: 'Melodic Inversion',
                component: SwitchSelector,
                props: {}
            }
        ],
        defaults: {
            inversion: PRESET_CHORD_INVERSIONS[0],
            melodicInversion: false
        }
    }
];