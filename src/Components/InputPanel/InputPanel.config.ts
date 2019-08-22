import { Concept, INTERVAL, NOTE_LABELS, Interval, ConceptConfig, Concepts } from "../../Common/Theory.config";
import { SwitchInput } from "../Inputs/SwitchInput/SwitchInput";
import { NumericInput } from "../Inputs/NumericInput/NumericInput";
import { ViewerConfig, Viewer } from "../Viewers/Viewer.config";
import { Keyboard, KeyboardConfig } from "../Viewers/Keyboard/Keyboard";
import { DropdownInput } from "../Inputs/DropdownInput/DropdownInput";
import { Fretboard, FretboardConfig } from "../Viewers/Fretboard/Fretboard";
import { FretboardTuner } from "../Inputs/FretboardTuner/FretboardTuner";

/***** Common *****/

export interface OptionInput {
    id: string;
    name: string;
    component: any;
    props: any;
    styles?: {
        vertical?: boolean;
        bold?: boolean;
    }
}

/***** Concept  *****/

export interface ConceptPreset {
    id: string;
    name: string;
    intervals: Interval[];
}

export interface ConceptType {
    id: string;
    name: string;
    optionInputs: OptionInput[],
    presets: ConceptPreset[]
}

export const CONCEPT_TYPES: ConceptType[] = [
    {
        id: 'interval',
        name: 'Intervals',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
        presets: Object.values(Concepts.Intervals)
    },
    {
        id: 'chord',
        name: 'Chords',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                component: NumericInput,
                props: {
                    min: 0,
                    max: 2
                },
                styles: {
                    bold: true
                }
            }
        ],
        presets: Object.values(Concepts.Chords)
    },
    {
        id: 'scale',
        name: 'Scales',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
        presets: Object.values(Concepts.Scales)
    },
    {
        id: 'mode',
        name: 'Modes',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
        presets: Object.values(Concepts.Modes)
    },
    {
        id: 'romanNumeral',
        name: 'Roman Numerals',
        optionInputs: [
            {
                id: 'melodicInversion',
                name: 'Melodic Inversion',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'chordInversion',
                name: 'Chord Inversion',
                component: NumericInput,
                props: {
                    min: 0,
                    max: 2
                },
                styles: {
                    bold: true
                }
            }
        ],
        presets: Object.values(Concepts.RomanNumerals)
    }
];

/***** Viewer *****/

export interface ViewerPreset {
    id: string;
    name: string;
    config: ViewerConfig;
}

export interface ViewerType {
    id: string;
    name: string;
    component: any,
    optionInputs: OptionInput[],
    presets: ViewerPreset[]
}

export const VIEWER_TYPES: ViewerType[] = [
    {
        id: 'keyboard',
        name: 'Keyboard',
        component: Keyboard,
        optionInputs: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                component: DropdownInput,
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
                component: NumericInput,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'keyHigh',
                name: 'High Key',
                component: NumericInput,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            }
        ],
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
        ]
    },
    {
        id: 'fretboard',
        name: 'Fretboard',
        component: Fretboard,
        optionInputs: [
            {
                id: 'noteLabel',
                name: 'Note Label',
                component: DropdownInput,
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
                component: NumericInput,
                props: {
                    min: 0,
                    max: 24
                },
                styles: {
                    bold: true
                }
            },
            {
                id: 'fretHigh',
                name: 'High Fret',
                component: NumericInput,
                props: {
                    min: 0,
                    max: 24
                },
                styles: {
                    bold: true
                }
            },
            {
                id: 'filterOctave',
                name: 'Filter Octave',
                component: SwitchInput,
                props: {},
                styles: {
                    bold: true
                }
            },
            {
                id: 'showDots',
                name: 'Show Dots',
                component: SwitchInput,
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
        ],
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
        ]
    }
];