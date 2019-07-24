import { Parameter } from "../MasterParameters";

export enum Inversion {
    First = 1,
    Second = 2,
    Third = 3
}

export interface InversionParameter extends Parameter {
    value: Inversion;
}

export let DEF_inversion: InversionParameter[] = [
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
];