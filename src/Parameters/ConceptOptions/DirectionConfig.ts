import { Parameter } from "../MasterParameters";

export enum Direction {
    Ascending,
    Descending
}

export interface DirectionParameter extends Parameter {
    value: Direction;
}

export let DEF_direction: DirectionParameter[] = [
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
];