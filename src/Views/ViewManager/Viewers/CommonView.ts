import { ViewerSelector } from "../Selectors/ViewerSelector";
import { NoteSummarySet } from "./SummaryView/NoteSummarySet";
import { Piano } from "./PianoView/Piano";
import { Guitar } from "./GuitarView/Guitar";
import { ParameterConfig } from "../../../Parameters/MasterParameters";

export const DEFAULT_CONCEPT_TYPE = {
    id: 'scale',
    name: 'Scales'
}

export const DEFAULT_CONCEPT = {
    typeId: 'scale',
    intervals: []
};

export let ViewerDefinitions = {
    id: 'viewer',
    name: 'Viewers',
    data: [
        {
            id: 'selector',
            name: 'Selector',
            class: ViewerSelector
        },
        {
            id: 'noteSummary',
            name: 'Note Summary',
            class: NoteSummarySet
        },
        {
            id: 'piano',
            name: 'Piano',
            class: Piano
        },
        {
            id: 'guitar',
            name: 'Guitar',
            class: Guitar
        }
    ]
} as ParameterConfig