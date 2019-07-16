import { INTERVALS } from "./IntervalDefinitions";
import { ConceptParameter } from "../../Common/TheoryEngine";

export let ModeDefinitions: ConceptParameter[] = [
    {
        id: 'ionian',
        name: 'Ionian',
        intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
    },
    {
        id: 'dorian',
        name: 'Dorian',
        intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
    },
    {
        id: 'phrygian',
        name: 'Phrygian',
        intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
    },
    {
        id: 'lydian',
        name: 'Lydian',
        intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.A4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
    },
    {
        id: 'mixolydian',
        name: 'Mixolydian',
        intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
    },
    {
        id: 'aeolian',
        name: 'Aeolian',
        intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
    },
    {
        id: 'locrian',
        name: 'Locrian',
        intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.d5, INTERVALS.m6, INTERVALS.m7]
    }
];