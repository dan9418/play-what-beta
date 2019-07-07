import { IParamConfig, IParamDef } from "../IParamConfig";

export enum Inversion {
    First = 1,
    Second = 2,
    Third = 3
}

export interface InversionDef extends IParamDef {
    value: Inversion;
}

export let PARAM_inversion: IParamConfig<InversionDef> = {
    id: 'inversion',
    name: 'Inversion',
    data: [
        {
            id: 'first',
            name: 'First',
            value: Inversion.First
        },
        {
            id: 'second',
            name: 'Second',
            value: Inversion.Second
        },
        {
            id: 'third',
            name: 'Third',
            value: Inversion.Third
        }
    ]
};