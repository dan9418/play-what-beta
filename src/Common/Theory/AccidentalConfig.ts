// Interface

export interface Accidental {
    id: string;
    name: string;
    offset: number;
}

// Definitions

export const ACCIDENTAL = {
    doubleFlat: {
        id: 'doubleFlat',
        name: 'bb',
        offset: -2
    },
    flat: {
        id: 'flat',
        name: 'b',
        offset: -1
    },
    natural: {
        id: 'natural',
        name: '♮',
        offset: 0
    },
    sharp: {
        id: 'sharp',
        name: '#',
        offset: 1
    },
    doubleSharp: {
        id: 'doubleSharp',
        name: 'xx',
        offset: 2
    }
};

// List

export const ALL_ACCIDENTALS: Accidental[] = [
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
];