export enum PianoKeyType {
    Black,
    White
}

export interface PianoKeyConfig {
    absolutePosition: number;
    type: PianoKeyType;
}


export interface PianoConfig {
    noteLabel: any;
    filterOctave: boolean;
    keyLow: number;
    keyHigh: number;
    keys: PianoKeyConfig[];
}

export const ALL_PIANO_KEY_LABELS = [
    {
        id: 'interval',
        name: 'Interval'
    },
    {
        id: 'name',
        name: 'Name'
    }
]

export const PRESETS_PIANO_CONFIG = [
    {
        id: 'default',
        name: 'Default',
        config: {
            noteLabel: ALL_PIANO_KEY_LABELS[0],
            filterOctave: false,
            keyLow: 0,
            keyHigh: 24
        }
    },
    {
        id: 'singleOctave',
        name: 'Single Octave',
        config: {
            noteLabel: ALL_PIANO_KEY_LABELS[0],
            filterOctave: false,
            keyLow: 0,
            keyHigh: 11
        }
    }
];