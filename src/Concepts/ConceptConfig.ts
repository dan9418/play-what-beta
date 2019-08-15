import { Interval, PRESET_INTERVALS, INTERVAL } from "./Interval/IntervalConfig";
import { PRESET_CHORDS, PRESET_CHORD_INVERSIONS } from "./Chord/ChordConfig";
import { PRESET_SCALES } from "./Scale/ScaleConfig";
import { PRESET_MODES } from "./Mode/ModeConfig";
import { SwitchSelector } from "../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { PRESETS_ROMAN_NUMERAL } from "./RomanNumeral/RomanNumeralConfig";
import { BoxSelector } from "../InputPanel/Selectors/BoxSelector/BoxSelector";
import { OptionInput, Preset } from "../AppConfig";

export interface ConceptConfig {
    intervals: Interval[];
}

export interface ConceptDefinition {
    id: string;
    name: string;
    presets: Preset<ConceptConfig>[];
}

export interface IntervalOptions {
    inversion: any,
    melodicInversion: boolean,
    reverse: boolean;
}

export const DEFAULT_INTERVAL_OPTIONS: IntervalOptions = {
    inversion: PRESET_CHORD_INVERSIONS[0],
    melodicInversion: false,
    reverse: false
};

export const INTERVAL_OPTIONS: OptionInput[] = [
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
    }/*,
    {
        propertyId: 'reverse',
        label: 'Reverse',
        component: SwitchSelector,
        props: {}
    }*/
]

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
    {
        id: 'romanNumeral',
        name: 'Roman Numerals',
        presets: PRESETS_ROMAN_NUMERAL
    }
];