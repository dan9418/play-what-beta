import { DropdownSelector } from "../InputPanel/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../InputPanel/NumericSelector/NumericSelector";
import { SwitchSelector } from "../InputPanel/SwitchSelector/SwitchSelector";
import { FretboardTuner } from "../InputPanel/FretboardTuner/FretboardTuner";
import { Keyboard, KeyboardConfig } from "../Viewers/Keyboard/Keyboard";
import { Fretboard, FretboardConfig } from "../Viewers/Fretboard/Fretboard";
import { FretboardStringConfig } from "../Viewers/Fretboard/FretboardString";
import { ViewDriverProps } from "../ViewDriver/ViewDriver";

/***** CONSTANTS *****/

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
    M7: { id: 'M7', name: 'Major 7th', degree: 7, semitones: 11 }
};

export const MAJOR_SCALE = [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7]

/***** INPUTS *****/

// Degree

export interface Degree {
    id: string;
    name: string;
    value: number;
    index: number;
}

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

// Accidental

export interface Accidental {
    id: string;
    name: string;
    offset: number;
}


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

// Concept

export interface Interval {
    id: string;
    name: string;
    degree: number;
    semitones: number;
    octaveOffset?: number;
}

export interface Concept {
    intervals: Interval[];
}

export interface ConceptConfig {
    chordInversion: number,
    melodicInversion: boolean,
    reverse: boolean;
}

// Note Label

export interface NoteLabel {
    id: string;
    name: string;
}

export let ALL_NOTE_LABELS: NoteLabel[] = [
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
        id: 'noteIndex',
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

// Viewer

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

/***** Theory Interfaces *****/

export interface KeyCenter {
    degree: Degree;
    accidental: Accidental;
    octave: number;
}

export interface PhysicalNote {
    noteIndex: number;
    noteOctave: number;
    pitchClass: number;
    frequency: number;
}

export interface FunctionalNote {
    key: KeyCenter;
    interval: Interval;
    noteDegree: number;
    pitchClass: number;
    accidentalOffset: number;
    name: string;
}

export interface CompleteNote extends PhysicalNote, FunctionalNote {}

/***** PRESETS & UI *****/

export interface InputDefinition {
    id: string;
    name: string;
    component: any;
    props: any;
    vertical?: boolean;
    bold?: boolean;
}

export type InputProps = {
    value: any;
    setValue: (value: any) => void;
}

export interface Preset<T> {
    id: string;
    name: string;
    config: T;
}

export interface PresetType<T> {
    id: string;
    name: string;
    options: InputDefinition[];
    presets: Preset<T>[];
}

// Concept

export interface ConceptType extends PresetType<Concept> {}

export const CONCEPT_TYPES: ConceptType[] = [
    {
        id: 'interval',
        name: 'Intervals',
        presets: [
            {
                id: 'PU',
                name: 'Perfect Unison',
                config: { intervals: [INTERVAL.PU, INTERVAL.PU] }
            },
            {
                id: 'm2',
                name: 'Minor 2nd',
                config: { intervals: [INTERVAL.PU, INTERVAL.m2] }
            },
            {
                id: 'M2',
                name: 'Major 2nd',
                config: { intervals: [INTERVAL.PU, INTERVAL.M2] }
            },
            {
                id: 'm3',
                name: 'Minor 3rd',
                config: { intervals: [INTERVAL.PU, INTERVAL.m3] }
            },
            {
                id: 'M3',
                name: 'Major 3rd',
                config: { intervals: [INTERVAL.PU, INTERVAL.M3] }
            },
            {
                id: 'P4',
                name: 'Perfect 4th',
                config: { intervals: [INTERVAL.PU, INTERVAL.P4] }
            },
            {
                id: 'A4',
                name: 'Augmented 4th',
                config: { intervals: [INTERVAL.PU, INTERVAL.A4] }
            },
            {
                id: 'TT',
                name: 'Tritone',
                config: { intervals: [INTERVAL.PU, INTERVAL.TT] }
            },
            {
                id: 'd5',
                name: 'Diminished 5th',
                config: { intervals: [INTERVAL.PU, INTERVAL.d5] }
            },
            {
                id: 'P5',
                name: 'Perfect 5th',
                config: { intervals: [INTERVAL.PU, INTERVAL.P5] }
            },
            {
                id: 'A5',
                name: 'Augmented 5th',
                config: { intervals: [INTERVAL.PU, INTERVAL.A5] }
            },
            {
                id: 'm6',
                name: 'Minor 6th',
                config: { intervals: [INTERVAL.PU, INTERVAL.m6] }
            },
            {
                id: 'M6',
                name: 'Major 6th',
                config: { intervals: [INTERVAL.PU, INTERVAL.M6] }
            },
            {
                id: 'd7',
                name: 'Diminished 7th',
                config: { intervals: [INTERVAL.PU, INTERVAL.d7] }
            },
            {
                id: 'm7',
                name: 'Minor 7th',
                config: { intervals: [INTERVAL.PU, INTERVAL.m7] }
            },
            {
                id: 'M7',
                name: 'Major 7th',
                config: { intervals: [INTERVAL.PU, INTERVAL.M7] }
            }
        ],
        options: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                bold: true,
                component: SwitchSelector,
                props: {}
            }
        ]
    },
    {
        id: 'chord',
        name: 'Chords',
        presets: [
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
        ],
        options: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                bold: true,
                component: SwitchSelector,
                props: {}
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                bold: true,
                component: NumericSelector,
                props: {
                    min: 0,
                    max: 3
                }
            }
        ]
    },
    {
        id: 'scale',
        name: 'Scales',
        presets: [
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
        ],
        options: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                bold: true,
                component: SwitchSelector,
                props: {}
            }
        ]
    },
    {
        id: 'mode',
        name: 'Modes',
        presets: [
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
        ],
        options: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                bold: true,
                component: SwitchSelector,
                props: {}
            }
        ]
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
        options: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                bold: true,
                component: SwitchSelector,
                props: {}
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                bold: true,
                component: NumericSelector,
                props: {
                    min: 0,
                    max: 2
                }
            }
        ]
    }
];

// Viewer

export interface ViewerType extends PresetType<ViewerConfig>, Viewer {}

export const VIEWER_DEFINITIONS: ViewerType[] = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard,
        presets: [
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
        ] as Preset<KeyboardConfig>[],
        options: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                bold: true,
                component: DropdownSelector,
                props: {
                    data: ALL_NOTE_LABELS
                }
            },
            {
                id: 'keyLow',
                name: 'Low Key',
                bold: true,
                component: NumericSelector,
                props: {}
            },
            {
                id: 'keyHigh',
                name: 'High Key',
                bold: true,
                component: NumericSelector,
                props: {}
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                bold: true,
                component: SwitchSelector,
                props: {}
            }
        ]
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard,
        presets: [
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
                id: 'guitar_A_shapes',
                name: 'Guitar, A Shapes',
                config: {
                    noteLabel: { id: 'interval' } as any,
                    showDots: true,
                    filterOctave: false,
                    fretLow: 0,
                    fretHigh: 12,
                    strings: [
                        { openPosition: 16, filteredIntervals: [INTERVAL.P5, INTERVAL.d5] },   // e
                        { openPosition: 11, filteredIntervals: [INTERVAL.m3, INTERVAL.M3] },   // B
                        { openPosition: 7, filteredIntervals: [INTERVAL.PU] },    // G
                        { openPosition: 2, filteredIntervals: [INTERVAL.P5, INTERVAL.d5] },    // D
                        { openPosition: -3, filteredIntervals: [INTERVAL.PU] },   // A
                        { openPosition: -8, filteredIntervals: [] }    // E   
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
        ] as Preset<FretboardConfig>[],
        options: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                bold: true,
                component: DropdownSelector,
                props: {
                    data: ALL_NOTE_LABELS
                }
            },
            {
                id: 'fretLow',
                name: 'Low Fret',
                bold: true,
                component: NumericSelector,
                props: {}
            },
            {
                id: 'fretHigh',
                name: 'High Fret',
                bold: true,
                component: NumericSelector,
                props: {}
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                bold: true,
                component: SwitchSelector,
                props: {}
            },
            {
                id: 'showDots',
                name: 'Show Dots',
                bold: true,
                component: SwitchSelector,
                props: {}
            },
            {
                id: 'strings',
                name: 'Strings',
                vertical: true,
                bold: true,
                component: FretboardTuner,
                props: {}
            }
        ]
    }
];

// Defaults

export const DEFAULT_CONCEPT = 1;
export const DEFAULT_VIEWER = 1;

export const DEFAULT_CONCEPT_CONFIG: ConceptConfig = {
    chordInversion: 0,
    melodicInversion: false,
    reverse: false
};

export const DEFAULT_VIEW_DRIVER_PROPS: ViewDriverProps = {
    degree: ALL_DEGREES[0],
    accidental: ALL_ACCIDENTALS[2],
    octave: 4,
    conceptType: CONCEPT_TYPES[DEFAULT_CONCEPT],
    conceptIntervals: CONCEPT_TYPES[DEFAULT_CONCEPT].presets[0].config.intervals,
    conceptConfig: DEFAULT_CONCEPT_CONFIG,
    viewerType: VIEWER_DEFINITIONS[DEFAULT_VIEWER],
    viewerConfig: VIEWER_DEFINITIONS[DEFAULT_VIEWER].presets[0].config
}

export const DEFAULT_FRETBOARD_STRING: FretboardStringConfig = {
    openPosition: 0
}

export const CALIBRATION_NOTE: PhysicalNote = {
    frequency: 440,
    noteIndex: 9,
    pitchClass: 9,
    noteOctave: 4
}