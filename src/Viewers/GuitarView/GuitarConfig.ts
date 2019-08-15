import { Preset } from "../../Theory/TheoryConfig";
import { Interval, INTERVAL } from "../../Concepts/Interval/IntervalConfig";

export interface GuitarConfig {
    noteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: GuitarStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface GuitarStringConfig {
    openPosition: number
    filterIntervals: Interval[];
}

export const PRESETS_GUITAR_CONFIG: Preset<GuitarConfig>[] = [
    {
        id: 'guitar',
        name: 'Guitar',
        config: {
            noteLabel: { id: 'interval' } as any,
            showDots: true,
            filterOctave: false,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 16, filterIntervals: [INTERVAL.PU, INTERVAL.M3] },   // e
                { openPosition: 11, filterIntervals: [INTERVAL.M3, INTERVAL.P5] },   // B
                { openPosition: 7, filterIntervals: [INTERVAL.PU, INTERVAL.M3] },    // G
                { openPosition: 2, filterIntervals: [INTERVAL.PU, INTERVAL.P5] },    // D
                { openPosition: -3, filterIntervals: [INTERVAL.M3, INTERVAL.P5] },   // A
                { openPosition: -8, filterIntervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5] }    // E   
            ]
        }
    },
    {
        id: 'bass',
        name: 'Bass',
        config: {
            noteLabel: { id: 'name' } as any,
            showDots: true,
            filterOctave: false,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 7, filterIntervals: [] },    // G
                { openPosition: 2, filterIntervals: [] },    // D
                { openPosition: -3, filterIntervals: [] },   // A
                { openPosition: -8, filterIntervals: [] }    // E   
            ]
        }
    }
]