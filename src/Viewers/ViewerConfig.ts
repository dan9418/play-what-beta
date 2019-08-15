import { Piano } from "./PianoView/Piano";
import { Guitar } from "./GuitarView/Guitar";
import { PRESETS_GUITAR_CONFIG } from "./GuitarView/GuitarConfig";
import { PRESETS_PIANO_CONFIG } from "./PianoView/PianoConfig";
import { Preset, ALL_NOTE_LABELS } from "../Theory/TheoryConfig";
import { OptionInput } from "../Concepts/ConceptConfig";
import { NumericSelector } from "../InputPanel/Selectors/NumericSelector/NumericSelector";
import { SwitchSelector } from "../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { DropdownSelector } from "../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { FretboardTuner } from "../InputPanel/Selectors/FretboardTuner/FretboardTuner";

export interface ViewerDefinition {
    id: string;
    name: string;
    component: any;
    options: OptionInput[];
    presets: Preset<any>[];
}

export const VIEWER_DEFINITIONS: ViewerDefinition[] = [
    {
        id: 'piano',
        name: 'Piano',
        component: Piano,
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
        component: Guitar,
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
]