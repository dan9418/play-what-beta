import { Piano } from "./PianoView/Piano";
import { Guitar } from "./GuitarView/Guitar";
import { PRESETS_GUITAR_CONFIG, ALL_GUITAR_FRET_LABELS } from "./GuitarView/GuitarConfig";
import { PRESETS_PIANO_CONFIG, ALL_PIANO_KEY_LABELS } from "./PianoView/PianoConfig";
import { Preset } from "../Theory/TheoryConfig";
import { OptionInput } from "../Concepts/ConceptConfig";
import { NumericSelector } from "../InputPanel/Selectors/NumericSelector/NumericSelector";
import { SwitchSelector } from "../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { DropdownSelector } from "../InputPanel/Selectors/DropdownSelector/DropdownSelector";

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
                label: 'Key Label',
                component: DropdownSelector,
                props: {
                    data: ALL_PIANO_KEY_LABELS
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
                propertyId: 'fretLabel',
                label: 'Fret Label',
                component: DropdownSelector,
                props: {
                    data: ALL_GUITAR_FRET_LABELS
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
            }
        ]
    }
]