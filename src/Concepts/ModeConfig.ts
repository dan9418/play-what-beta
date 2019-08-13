import { Preset, ConceptConfig } from "../Theory/TheoryConfig";
import { Interval, INTERVAL } from "./IntervalConfig";

// Interface

// Definitions

// List

// Presets

export let PRESET_MODES: Preset<ConceptConfig>[] = [
    {
        id: 'ionian',
        name: 'Ionian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'dorian',
        name: 'Dorian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7] }
    },
    {
        id: 'phrygian',
        name: 'Phrygian',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'lydian',
        name: 'Lydian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.A4, INTERVAL.P5, INTERVAL.M6, INTERVAL.M7] }
    },
    {
        id: 'mixolydian',
        name: 'Mixolydian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.M3, INTERVAL.P4, INTERVAL.P5, INTERVAL.M6, INTERVAL.m7] }
    },
    {
        id: 'aeolian',
        name: 'Aeolian',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.m3, INTERVAL.P4, INTERVAL.P5, INTERVAL.m6, INTERVAL.m7] }
    },
    {
        id: 'locrian',
        name: 'Locrian',
        config: { intervals: [INTERVAL.PU, INTERVAL.m2, INTERVAL.m3, INTERVAL.P4, INTERVAL.d5, INTERVAL.m6, INTERVAL.m7] }
    }
];