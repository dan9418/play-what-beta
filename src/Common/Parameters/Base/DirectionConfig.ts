import { IParamConfig, IParamDef } from "../IParamConfig";

export enum Direction {
    Ascending,
    Descending
}

export interface DirectionDef extends IParamDef {
    value: Direction;
}

export let PARAM_direction: IParamConfig<DirectionDef> = {
    id: 'direction',
    name: 'Direction',
    data: [
        {
            id: 'ascending',
            name: 'Ascending',
            value: Direction.Ascending
        },
        {
            id: 'descending',
            name: 'Descending',
            value: Direction.Descending
        }
    ]
};