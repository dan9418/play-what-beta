import { Keyboard } from "./ViewerComponents/Keyboard/Keyboard";
import { DropdownSelector } from "./InputComponents/DropdownSelector/DropdownSelector";
import { NumericSelector } from "./InputComponents/NumericSelector/NumericSelector";
import { SwitchSelector } from "./InputComponents/SwitchSelector/SwitchSelector";
import { Fretboard } from "./ViewerComponents/Fretboard/Fretboard";
import { FretboardTuner } from "./InputComponents/FretboardTuner/FretboardTuner";
import { BoxSelector } from "./InputComponents/BoxSelector/BoxSelector";

export type SelectorProps = {
    value: any;
    setValue: (value: any) => void;
}

export interface Preset<T> {
    id: string;
    name: string;
    config: T;
}

export interface OptionInput {
    propertyId: string;
    label: string;
    vertical?: boolean;
    component: any;
    props: any;
    parentProps?: boolean
}




export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
    octaveOffset?: number;
}

export const INTERVAL = {
    None: { id: '', name: '', degree: 0, semitones: 0 },
    PU: { id: 'PU', name: 'Perfect Unison', degree: 1, semitones: 0 },
    m2: { id: 'm2', name: 'Minor 2nd', degree: 2, semitones: 1 },
    M2: { id: 'M2', name: 'Major 2nd', degree: 2, semitones: 2 },
    m3: { id: 'm3', name: 'Minor 3rd', degree: 3, semitones: 3 },
    M3: { id: 'M3', name: 'Major 3rd', degree: 3, semitones: 4 },
    P4: { id: 'P4', name: 'Perfect 4th', degree: 4, semitones: 5 },
    A4: { id: 'A4', name: 'Augmented 4th', degree: 4, semitones: 6 },
    TT: { id: 'TT', name: 'Tritone', degree: 0, semitones: 6 },
    d5: { id: 'd5', name: 'Diminished 5th', degree: 5, semitones: 6 },
    P5: { id: 'P5', name: 'Perfect 5th', degree: 5, semitones: 7 },
    A5: { id: 'A5', name: 'Augmented 5th', degree: 5, semitones: 8 },
    m6: { id: 'm6', name: 'Minor 6th', degree: 6, semitones: 8 },
    M6: { id: 'M6', name: 'Major 6th', degree: 6, semitones: 9 },
    d7: { id: 'd7', name: 'Diminished 7th', degree: 7, semitones: 9 },
    m7: { id: 'm7', name: 'Minor 7th', degree: 7, semitones: 10 },
    M7: { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 },
    P8: { id: 'P8', name: 'Perfect Octave', degree: 8, semitones: 12 },
    m9: { id: 'm9', name: 'Minor 9th', degree: 9, semitones: 13 },
    M9: { id: 'M9', name: 'Major 9th', degree: 9, semitones: 14 },
    m10: { id: 'm10', name: 'Minor 10th', degree: 10, semitones: 15 },
    M10: { id: 'M10', name: 'Major 10th', degree: 10, semitones: 16 },
    P11: { id: 'P11', name: 'Perfect 11th', degree: 11, semitones: 17 },
    A11: { id: 'A11', name: 'Augmented 11h', degree: 11, semitones: 18 },
    dTT: { id: 'dTT', name: 'Double Tritone', degree: 0, semitones: 18 },
    d12: { id: 'd12', name: 'Diminished 12th', degree: 12, semitones: 18 },
    P12: { id: 'P12', name: 'Perfect 12th', degree: 12, semitones: 19 },
    A12: { id: 'A12', name: 'Augmented 12th', degree: 12, semitones: 20 },
    m13: { id: 'm13', name: 'Minor 13th', degree: 13, semitones: 20 },
    M13: { id: 'M13', name: 'Major 13th', degree: 13, semitones: 21 },
    d14: { id: 'd14', name: 'Diminished 14th', degree: 14, semitones: 21 },
    m14: { id: 'm14', name: 'Minor 14th', degree: 14, semitones: 22 },
    M14: { id: 'M14', name: 'Major 14th', degree: 14, semitones: 23 }
};

export const ALL_INTERVALS: Interval[] = [
    { id: '', name: '', degree: 0, semitones: 0 },
    { id: 'PU', name: 'Perfect Unison', degree: 1, semitones: 0 },
    { id: 'm2', name: 'Minor 2nd', degree: 2, semitones: 1 },
    { id: 'M2', name: 'Major 2nd', degree: 2, semitones: 2 },
    { id: 'm3', name: 'Minor 3rd', degree: 3, semitones: 3 },
    { id: 'M3', name: 'Major 3rd', degree: 3, semitones: 4 },
    { id: 'P4', name: 'Perfect 4th', degree: 4, semitones: 5 },
    { id: 'A4', name: 'Augmented 4th', degree: 4, semitones: 6 },
    { id: 'TT', name: 'Tritone', degree: 0, semitones: 6 },
    { id: 'd5', name: 'Diminished 5th', degree: 5, semitones: 6 },
    { id: 'P5', name: 'Perfect 5th', degree: 5, semitones: 7 },
    { id: 'A5', name: 'Augmented 5th', degree: 5, semitones: 8 },
    { id: 'm6', name: 'Minor 6th', degree: 6, semitones: 8 },
    { id: 'M6', name: 'Major 6th', degree: 6, semitones: 9 },
    { id: 'd7', name: 'Diminished 7th', degree: 7, semitones: 9 },
    { id: 'm7', name: 'Minor 7th', degree: 7, semitones: 10 },
    { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 },
    { id: 'P8', name: 'Perfect Octave', degree: 8, semitones: 12 },
    { id: 'm9', name: 'Minor 9th', degree: 9, semitones: 13 },
    { id: 'M9', name: 'Major 9th', degree: 9, semitones: 14 },
    { id: 'm10', name: 'Minor 10th', degree: 10, semitones: 15 },
    { id: 'M10', name: 'Major 10th', degree: 10, semitones: 16 },
    { id: 'P11', name: 'Perfect 11th', degree: 11, semitones: 17 },
    { id: 'A11', name: 'Augmented 11h', degree: 11, semitones: 18 },
    { id: 'dTT', name: 'Double Tritone', degree: 0, semitones: 18 },
    { id: 'd12', name: 'Diminished 12th', degree: 12, semitones: 18 },
    { id: 'P12', name: 'Perfect 12th', degree: 12, semitones: 19 },
    { id: 'A12', name: 'Augmented 12th', degree: 12, semitones: 20 },
    { id: 'm13', name: 'Minor 13th', degree: 13, semitones: 20 },
    { id: 'M13', name: 'Major 13th', degree: 13, semitones: 21 },
    { id: 'd14', name: 'Diminished 14th', degree: 14, semitones: 21 },
    { id: 'm14', name: 'Minor 14th', degree: 14, semitones: 22 },
    { id: 'M14', name: 'Major 14th', degree: 14, semitones: 23 }
];

export let PRESET_INTERVALS = [
    {
        id: 'PU',
        name: 'Perfect Unison',
        config: { intervals: [INTERVAL.PU , INTERVAL.PU] }
    },
    {
        id: 'm2',
        name: 'Minor 2nd',
        config: { intervals: [INTERVAL.PU , INTERVAL.m2] }
    },
    {
        id: 'M2',
        name: 'Major 2nd',
        config: { intervals: [INTERVAL.PU , INTERVAL.M2] }
    },
    {
        id: 'm3',
        name: 'Minor 3rd',
        config: { intervals: [INTERVAL.PU , INTERVAL.m3] }
    },
    {
        id: 'M3',
        name: 'Major 3rd',
        config: { intervals: [INTERVAL.PU , INTERVAL.M3] }
    },
    {
        id: 'P4',
        name: 'Perfect 4th',
        config: { intervals: [INTERVAL.PU , INTERVAL.P4] }
    },
    {
        id: 'A4',
        name: 'Augmented 4th',
        config: { intervals: [INTERVAL.PU , INTERVAL.A4] }
    },
    {
        id: 'TT',
        name: 'Tritone',
        config: { intervals: [INTERVAL.PU , INTERVAL.TT] }
    },
    {
        id: 'd5',
        name: 'Diminished 5th',
        config: { intervals: [INTERVAL.PU , INTERVAL.d5] }
    },
    {
        id: 'P5',
        name: 'Perfect 5th',
        config: { intervals: [INTERVAL.PU , INTERVAL.P5] }
    },
    {
        id: 'A5',
        name: 'Augmented 5th',
        config: { intervals: [INTERVAL.PU , INTERVAL.A5] }
    },
    {
        id: 'm6',
        name: 'Minor 6th',
        config: { intervals: [INTERVAL.PU , INTERVAL.m6] }
    },
    {
        id: 'M6',
        name: 'Major 6th',
        config: { intervals: [INTERVAL.PU , INTERVAL.M6] }
    },
    {
        id: 'd7',
        name: 'Diminished 7th',
        config: { intervals: [INTERVAL.PU , INTERVAL.d7] }
    },
    {
        id: 'm7',
        name: 'Minor 7th',
        config: { intervals: [INTERVAL.PU , INTERVAL.m7] }
    },
    {
        id: 'M7',
        name: 'Major 7th',
        config: { intervals: [INTERVAL.PU , INTERVAL.M7] }
    }
];


export interface Accidental {
    id: string;
    name: string;
    offset: number;
}

export const ACCIDENTAL = {
    doubleFlat: {
        id: 'doubleFlat',
        name: 'bb',
        offset: -2
    },
    flat: {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    natural: {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    sharp: {
        id: 'sharp',
        name: '#',
        offset: 1
    },
    doubleSharp: {
        id: 'doubleSharp',
        name: 'xx',
        offset: 2
    }
};

export const ALL_ACCIDENTALS: Accidental[] = [
    {
        id: 'doubleFlat',
        name: 'bb',
        offset: -2
    },
    {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    {
        id: 'sharp',
        name: '#',
        offset: 1
    },
    {
        id: 'doubleSharp',
        name: 'xx',
        offset: 2
    }
];

export interface Degree {
    id: string;
    name: string;
    value: number;
    index: number;
}

export const DEGREE = {
    C: {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    D: {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    E: {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    F: {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    G: {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    A: {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    B: {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
};

export const ALL_DEGREES: Degree[] = [
    {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
];


export const PRESET_CHORDS: any[] = [
    {
        id: 'maj',
        name: 'Major Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5] }
    },
    {
        id: 'sus2',
        name: 'Suspended 2nd',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.P5] }
    },
    {
        id: 'sus4',
        name: 'Suspended 4th',
        config: { intervals: [INTERVAL.PU, INTERVAL.P4, INTERVAL.P5] }
    },
    {
        id: 'maj6',
        name: 'Major 6th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'dom7',
        name: 'Dominant "Major-Minor" 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'maj7',
        name: 'Major 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7] }
    },
    {
        id: 'aug',
        name: 'Augmented Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5] }
    },
    {
        id: 'aug7',
        name: 'Augmented Seventh',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7] }
    },
    {
        id: 'min',
        name: 'Minor Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5] }
    },
    {
        id: 'min6',
        name: 'Minor 6th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'min7',
        name: 'Minor 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'minMaj7',
        name: 'Minor-Major 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7] }
    },
    {
        id: 'dim',
        name: 'Diminished Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5] }
    },
    {
        id: 'dim7',
        name: 'Diminished 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7] }
    },
    {
        id: 'halfDim7',
        name: 'Half-Diminished 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7] }
    }
];

export const PRESET_CHORD_INVERSIONS = [
    {
        id: 'none',
        name: 'None',
        rotation: 0
    },
    {
        id: 'first',
        name: 'First',
        rotation: 1
    },
    {
        id: 'second',
        name: 'Second',
        rotation: 2
    }
]

export let PRESET_MODES: any[] = [
    {
        id: 'ionian',
        name: 'Ionian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'dorian',
        name: 'Dorian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7] }
    },
    {
        id: 'phrygian',
        name: 'Phrygian',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'lydian',
        name: 'Lydian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'mixolydian',
        name: 'Mixolydian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7] }
    },
    {
        id: 'aeolian',
        name: 'Aeolian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'locrian',
        name: 'Locrian',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7] }
    }
];


export const PRESETS_ROMAN_NUMERAL: any[] = [
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
];



export interface Key {
    degree: Degree;
    accidental: Accidental;
    octave: number;
}

export interface Note {
    octave: number;
    key: Key;
    interval: Interval;
    spellingDegree: number;
    pitchClass: number;
    absolutePosition: number;
    frequency: number;
    degree: Degree;
    accidental: Accidental;
    name: string;
}

export interface PhysicalNote {
    octave: number;
    pitchClass: number;
    absolutePosition: number;
    frequency: number;
}

export interface FunctionalNote {
    key: any;
    interval: any;
    spellingDegree: number;
    pitchClass: number;
    accidental: number;
    name: string;
}

export const MAJOR_SCALE = [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]

export let ALL_NOTE_LABELS = [
	{
		id: 'none',
		name: 'None'
	},
	{
		id: 'name',
		name: 'Name'
	},
	{
		id: 'interval',
		name: 'Interval'
	},
	{
		id: 'pitchClass',
		name: 'Relative Position'
	},
	{
		id: 'absolutePosition',
		name: 'Absolute Position'
	},
	{
		id: 'relativeDegree',
		name: 'Degree'
	},
	{
		id: 'octave',
		name: 'Octave'
	},
	{
		id: 'frequency',
		name: 'Frequency'
	}
];


export interface ViewerDefinition {
    id: string;
    name: string;
    component: any;
    options: OptionInput[];
    presets: Preset<any>[];
}


export const PRESETS_PIANO_CONFIG = [
    {
        id: 'default',
        name: 'Default',
        config: {
            noteLabel: ALL_NOTE_LABELS[0],
            filterOctave: true,
            keyLow: 0,
            keyHigh: 24
        }
    },
    {
        id: 'singleOctave',
        name: 'Single Octave',
        config: {
            noteLabel: ALL_NOTE_LABELS[0],
            filterOctave: true,
            keyLow: 0,
            keyHigh: 11
        }
    }
];


export const PRESETS_GUITAR_CONFIG: Preset<FretboardConfig>[] = [
    {
        id: 'guitar',
        name: 'Guitar',
        config: {
            noteLabel: { id: 'interval' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 16 },   // e
                { openPosition: 11 },   // B
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    },
    {
        id: 'bass',
        name: 'Bass',
        config: {
            noteLabel: { id: 'name' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    }
]

export const VIEWER_DEFINITIONS: ViewerDefinition[] = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard,
        presets: PRESETS_PIANO_CONFIG,
        options: [
            {
                propertyId: 'noteLabel',
                label: 'Note Label',
                component: DropdownSelector,
                props: {
                    data: ALL_NOTE_LABELS
                }
            },
            {
                propertyId: 'keyLow',
                label: 'Low Key',
                component: NumericSelector,
                props: {}
            },
            {
                propertyId: 'keyHigh',
                label: 'High Key',
                component: NumericSelector,
                props: {}
            },
            {
                propertyId: 'filterOctave',
                label: 'Filter Octave',
                component: SwitchSelector,
                props: {}
            }
        ]
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard,
        presets: PRESETS_GUITAR_CONFIG,
        options: [
            {
                propertyId: 'noteLabel',
                label: 'Note Label',
                component: DropdownSelector,
                props: {
                    data: ALL_NOTE_LABELS
                }
            },
            {
                propertyId: 'fretLow',
                label: 'Low Fret',
                component: NumericSelector,
                props: {}
            },
            {
                propertyId: 'fretHigh',
                label: 'High Fret',
                component: NumericSelector,
                props: {}
            },
            {
                propertyId: 'filterOctave',
                label: 'Filter Octave',
                component: SwitchSelector,
                props: {}
            },
            {
                propertyId: 'showDots',
                label: 'Show Dots',
                component: SwitchSelector,
                props: {}
            },
            {
                propertyId: 'strings',
                label: 'Strings',
                vertical: true,
                component: FretboardTuner,
                props: {},
                parentProps: true
            }
        ]
    }
];



export interface FretboardConfig {
    noteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: FretboardStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface FretboardStringConfig {
    openPosition: number
    filteredIntervals?: Interval[];
}

export const DEFAULT_FRETBOARD_STRING: FretboardStringConfig = {
    openPosition: 0
}



export enum KeyboardKeyType {
    Black,
    White
}

export interface KeyboardKeyConfig {
    absolutePosition: number;
    type: KeyboardKeyType;
}


export interface KeyboardConfig {
    noteLabel: any;
    filterOctave: boolean;
    keyLow: number;
    keyHigh: number;
    keys: KeyboardKeyConfig[];
}


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



export let PRESET_SCALES = [
    {
        id: 'major',
        name: 'Major',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'natualMinor',
        name: 'Natual Minor',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'harmonicMinor',
        name: 'Harmonic Minor',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7] }
    },
    {
        id: 'majorPentatonic',
        name: 'Major Pentatonic',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'minorPentatonic',
        name: 'Minor Pentatonic',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'chromatic',
        name: 'Chromatic',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.TT, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7] }
    }
];


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


export const DEFAULT_CONCEPT = 1;
export const DEFAULT_VIEWER = 1;

export type ViewerManagerProps = {
	// Key
	degree: Degree,
	accidental: Accidental,
	octave: number
	// Concept
    conceptDefinition: ConceptDefinition,
    intervals: Interval[],
    intervalOptions: IntervalOptions,
	// Viewer
    viewerDefinition: ViewerDefinition,
    viewerConfig: any
}

export const DEFAULT_VIEWER_MANAGER_PROPS: ViewerManagerProps = {
    degree: DEGREE.C,
    accidental: ACCIDENTAL.natural,
    octave: 4,
    conceptDefinition: CONCEPT_DEFINITIONS[DEFAULT_CONCEPT],
    intervals: CONCEPT_DEFINITIONS[DEFAULT_CONCEPT].presets[0].config.intervals,
    intervalOptions: DEFAULT_INTERVAL_OPTIONS,
    viewerDefinition: VIEWER_DEFINITIONS[DEFAULT_VIEWER],
    viewerConfig: VIEWER_DEFINITIONS[DEFAULT_VIEWER].presets[0].config
}

export type ViewerProps = {
	// Key
	degree: Degree,
	accidental: Accidental,
	octave: number
	// Concept
	intervals: Interval[],
	intervalOptions: IntervalOptions,
	// Viewer
	viewerComponent: any,
	viewerConfig: any,
}

export const DEFAULT_VIEWER_PROPS: ViewerProps = {
    degree: DEGREE.C,
    accidental: ACCIDENTAL.natural,
    octave: 4,
    intervals: CONCEPT_DEFINITIONS[DEFAULT_CONCEPT].presets[0].config.intervals,
    intervalOptions: DEFAULT_INTERVAL_OPTIONS,
    viewerComponent: VIEWER_DEFINITIONS[DEFAULT_VIEWER].component,
    viewerConfig: VIEWER_DEFINITIONS[DEFAULT_VIEWER].presets[0].config
}