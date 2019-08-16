import { Interval, INTERVAL } from "../../Concepts/Interval/IntervalConfig";
import { Preset } from "../../AppConfig";

export interface FretboardConfig {
    noteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: FretboardStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface FretboardStringConfig {
    openPosition: number
    filteredIntervals?: Interval[];
}

export const DEFAULT_FRETBOARD_STRING: FretboardStringConfig = {
    openPosition: 0
}

export const PRESETS_GUITAR_CONFIG: Preset<FretboardConfig>[] = [
    {
        id: 'guitar',
        name: 'Guitar',
        config: {
            noteLabel: { id: 'interval' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 16 },   // e
                { openPosition: 11 },   // B
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    },
    {
        id: 'bass',
        name: 'Bass',
        config: {
            noteLabel: { id: 'name' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    }
]