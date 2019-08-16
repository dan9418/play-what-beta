import { PRESETS_GUITAR_CONFIG } from "./Fretboard/FretboardConfig";
import { PRESETS_PIANO_CONFIG  } from "./Keyboard/KeyboardCOnfig";
import { ALL_NOTE_LABELS } from "../Theory/TheoryConfig";
import { CONCEPT_DEFINITIONS, IntervalOptions, DEFAULT_INTERVAL_OPTIONS, ConceptDefinition } from "../Concepts/ConceptConfig";
import { NumericSelector } from "../InputPanel/Selectors/NumericSelector/NumericSelector";
import { SwitchSelector } from "../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { DropdownSelector } from "../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { FretboardTuner } from "../InputPanel/Selectors/FretboardTuner/FretboardTuner";
import { DEGREE, Degree } from "../Key/DegreeConfig";
import { ACCIDENTAL, Accidental } from "../Key/AccidentalConfig";
import { Interval } from "../Concepts/Interval/IntervalConfig";
import { OptionInput, Preset } from "../AppConfig";
import { Keyboard } from "./Keyboard/Keyboard";
import { Fretboard } from "./Fretboard/Fretboard";

export interface ViewerDefinition {
    id: string;
    name: string;
    component: any;
    options: OptionInput[];
    presets: Preset<any>[];
}

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