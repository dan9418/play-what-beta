import { ALL_NOTE_LABELS } from "../../Theory/TheoryConfig";

export enum KeyboardKeyType {
    Black,
    White
}

export interface KeyboardKeyConfig {
    absolutePosition: number;
    type: KeyboardKeyType;
}


export interface KeyboardConfig {
    noteLabel: any;
    filterOctave: boolean;
    keyLow: number;
    keyHigh: number;
    keys: KeyboardKeyConfig[];
}

export const PRESETS_PIANO_CONFIG = [
    {
        id: 'default',
        name: 'Default',
        config: {
            noteLabel: ALL_NOTE_LABELS[0],
            filterOctave: true,
            keyLow: 0,
            keyHigh: 24
        }
    },
    {
        id: 'singleOctave',
        name: 'Single Octave',
        config: {
            noteLabel: ALL_NOTE_LABELS[0],
            filterOctave: true,
            keyLow: 0,
            keyHigh: 11
        }
    }
];