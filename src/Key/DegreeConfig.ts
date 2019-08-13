// Interface

export interface Degree {
    id: string;
    name: string;
    value: number;
    index: number;
}

// Definitions

export const DEGREE = {
    C: {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    D: {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    E: {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    F: {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    G: {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    A: {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    B: {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
};

// List

export const ALL_DEGREES: Degree[] = [
    {
        id: 'C',
        name: 'C',
        value: 1,
        index: 0
    },
    {
        id: 'D',
        name: 'D',
        value: 2,
        index: 2
    },
    {
        id: 'E',
        name: 'E',
        value: 3,
        index: 4
    },
    {
        id: 'F',
        name: 'F',
        value: 4,
        index: 5
    },
    {
        id: 'G',
        name: 'G',
        value: 5,
        index: 7
    },
    {
        id: 'A',
        name: 'A',
        value: 6,
        index: 9
    },
    {
        id: 'B',
        name: 'B',
        value: 7,
        index: 11
    }
];