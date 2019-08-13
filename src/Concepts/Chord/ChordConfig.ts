import { ConceptConfig, Preset } from "../../Theory/TheoryConfig";
import { INTERVAL } from "../Interval/IntervalConfig";

// Interface

// Definitions

// List

// Presets

export let PRESET_CHORDS: Preset<ConceptConfig>[] = [
    {
        id: 'maj',
        name: 'Major Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5] }
    },
    {
        id: 'sus2',
        name: 'Suspended 2nd',
        config: { intervals: [INTERVAL.PU, INTERVAL.M2, INTERVAL.P5] }
    },
    {
        id: 'sus4',
        name: 'Suspended 4th',
        config: { intervals: [INTERVAL.PU, INTERVAL.P4, INTERVAL.P5] }
    },
    {
        id: 'maj6',
        name: 'Major 6th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'dom7',
        name: 'Dominant "Major-Minor" 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'maj7',
        name: 'Major 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7] }
    },
    /*{
        id: 'maj9',
        name: 'Major 9',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9] }
    },
    {
        id: 'maj11',
        name: 'Major 11',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9, INTERVAL.P11] }
    },
    {
        id: 'maj13',
        name: 'Major 13',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5, INTERVAL.M7, INTERVAL.M9, INTERVAL.P11, INTERVAL.M13] }
    },*/
    {
        id: 'aug',
        name: 'Augmented Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5] }
    },
    {
        id: 'aug7',
        name: 'Augmented Seventh',
        config: { intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.A5, INTERVAL.m7] }
    },
    {
        id: 'min',
        name: 'Minor Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5] }
    },
    {
        id: 'min6',
        name: 'Minor 6th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M6] }
    },
    {
        id: 'min7',
        name: 'Minor 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.m7] }
    },
    {
        id: 'minMaj7',
        name: 'Minor-Major 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.P5, INTERVAL.M7] }
    },
    {
        id: 'dim',
        name: 'Diminished Triad',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5] }
    },
    {
        id: 'dim7',
        name: 'Diminished 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.d7] }
    },
    {
        id: 'halfDim7',
        name: 'Half-Diminished 7th',
        config: { intervals: [INTERVAL.PU, INTERVAL.m3, INTERVAL.d5, INTERVAL.m7] }
    }
];