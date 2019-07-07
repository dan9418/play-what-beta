import { IParamConfig, IParamDef } from "../IParamConfig";

export interface AccidentalDef extends IParamDef {
    offset: number
}

export let PARAM_accidental: IParamConfig<AccidentalDef> = {
    id: 'accidental',
    name: 'Accidental',
    data: [
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
    ]
};