import { IParamConfig, IParamDef } from "../IParamConfig";

export interface ConceptTypeDef extends IParamDef {
    enabled: boolean;
}

export let PARAM_conceptType: IParamConfig<ConceptTypeDef> = {
    id: 'conceptType',
    name: 'Concept Type',
    data: [
        {
            id: 'interval',
            name: 'Intervals',
            enabled: true
        },
        {
            id: 'chord',
            name: 'Chords',
            enabled: true
        },
        {
            id: 'scale',
            name: 'Scales',
            enabled: true
        },
        {
            id: 'mode',
            name: 'Modes',
            enabled: true
        }/*,
        {
            id: 'romanNumeral',
            name: 'Roman Numerals',
            enabled: false
        }*/
    ]
}