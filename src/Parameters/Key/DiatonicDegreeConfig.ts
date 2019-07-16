import { Parameter } from "../MasterParameters";

export interface DiatonicDegreeParameter extends Parameter {
    degree: number,
    homePostition: number
}

export let DiatonicDegreeDefinitions: DiatonicDegreeParameter[] = [
    {
        id: 'C',
        name: 'C',
        degree: 1,
        homePostition: 0
    },
    {
        id: 'D',
        name: 'D',
        degree: 2,
        homePostition: 2
    },
    {
        id: 'E',
        name: 'E',
        degree: 3,
        homePostition: 4
    },
    {
        id: 'F',
        name: 'F',
        degree: 4,
        homePostition: 5
    },
    {
        id: 'G',
        name: 'G',
        degree: 5,
        homePostition: 7
    },
    {
        id: 'A',
        name: 'A',
        degree: 6,
        homePostition: 9
    },
    {
        id: 'B',
        name: 'B',
        degree: 7,
        homePostition: 11
    }
];