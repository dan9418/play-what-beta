import { INTERVAL } from "./IntervalConfig";

// Interface

// Definitions

// List

// Presets

export let PRESET_SCALES = [
    {
        id: 'major',
        name: 'Major',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'natualMinor',
        name: 'Natual Minor',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'harmonicMinor',
        name: 'Harmonic Minor',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.M7] }
    },
    {
        id: 'majorPentatonic',
        name: 'Major Pentatonic',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'minorPentatonic',
        name: 'Minor Pentatonic',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'chromatic',
        name: 'Chromatic',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.M2, INTERVAL.m3, INTERVAL.M3, INTERVAL.P4, INTERVAL.TT, INTERVAL.P5, INTERVAL.m6, INTERVAL.M6, INTERVAL.m7, INTERVAL.M7] }
    }
];