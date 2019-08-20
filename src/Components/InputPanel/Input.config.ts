import { Concept, INTERVAL, NOTE_LABELS, KeyCenter, DEGREES, ACCIDENTALS } from "../Common/Theory.config";
import { SwitchSelector } from "./SwitchSelector/SwitchSelector";
import { NumericSelector } from "./NumericSelector/NumericSelector";
import { ViewerConfig, Viewer } from "../Viewers/Viewer.config";
import { Keyboard, KeyboardConfig } from "../Viewers/Keyboard/Keyboard";
import { DropdownSelector } from "./DropdownSelector/DropdownSelector";
import { Fretboard, FretboardConfig } from "../Viewers/Fretboard/Fretboard";
import { FretboardTuner } from "./FretboardTuner/FretboardTuner";

/***** General Inputs *****/

export interface InputProps {
    value: any;
    setValue: (value: any) => void;
}

/***** Presets *****/

export interface Preset<T> {
    id: string;
    name: string;
    config: T;
}

export interface PresetOption {
    id: string;
    name: string;
    component: any;
    props: any;
    styles?: {
        vertical?: boolean;
        bold?: boolean;
    }
}

export interface PresetType<T> {
    id: string;
    name: string;
    optionInputs: PresetOption[];
    presets: Preset<T>[];
}

// Concept

export interface ConceptType extends PresetType<Concept> { }

export const CONCEPT_TYPES: ConceptType[] = [
    {
        id: 'interval',
        name: 'Intervals',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
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
        ]
    },
    {
        id: 'chord',
        name: 'Chords',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                component: NumericSelector,
                props: {
                    min: 0,
                    max: 2
                },
                styles: {
                    bold: true
                }
            }
        ],
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
        ]
    },
    {
        id: 'scale',
        name: 'Scales',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
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
        ]
    },
    {
        id: 'mode',
        name: 'Modes',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
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
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                component: NumericSelector,
                props: {
                    min: 0,
                    max: 2
                },
                styles: {
                    bold: true
                }
            }
        ]
    }
];

// Viewer

export interface ViewerType extends PresetType<ViewerConfig>, Viewer { }

export const VIEWER_TYPES: ViewerType[] = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard,
        presets: [
            {
                id: 'default',
                name: 'Default',
                config: {
                    noteLabel: NOTE_LABELS[2],
                    filterOctave: true,
                    keyLow: 0,
                    keyHigh: 24
                }
            },
            {
                id: 'singleOctave',
                name: 'Single Octave',
                config: {
                    noteLabel: NOTE_LABELS[1],
                    filterOctave: true,
                    keyLow: 0,
                    keyHigh: 11
                }
            }
        ] as Preset<KeyboardConfig>[],
        optionInputs: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                component: DropdownSelector,
                props: {
                    data: NOTE_LABELS
                },
                styles: {
                    bold: true
                }
            },
            {
                id: 'keyLow',
                name: 'Low Key',
                component: NumericSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'keyHigh',
                name: 'High Key',
                component: NumericSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
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
                    noteLabel: NOTE_LABELS[2],
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
                    noteLabel: NOTE_LABELS[2],
                    showDots: true,
                    filterOctave: true,
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
                    noteLabel: NOTE_LABELS[2],
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
        optionInputs: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                component: DropdownSelector,
                props: {
                    data: NOTE_LABELS
                },
                styles: {
                    bold: true
                }
            },
            {
                id: 'fretLow',
                name: 'Low Fret',
                component: NumericSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'fretHigh',
                name: 'High Fret',
                component: NumericSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'showDots',
                name: 'Show Dots',
                component: SwitchSelector,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'strings',
                name: 'Strings',
                component: FretboardTuner,
                props: {},
                styles: {
                    vertical: true,
                    bold: true
                }
            }
        ]
    }
];