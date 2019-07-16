import { ConceptParameter } from "../MasterParameters";
import { INTERVALS } from "./IntervalDefinitions";

export let ChordDefinitions: ConceptParameter[] = [
        {
            id: 'maj',
            name: 'Major Triad',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5]
        },
        {
            id: 'sus2',
            name: 'Suspended 2nd',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.P5]
        },
        {
            id: 'sus4',
            name: 'Suspended 4th',
            intervals: [INTERVALS.PU, INTERVALS.P4, INTERVALS.P5]
        },
        {
            id: 'maj6',
            name: 'Major 6th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'dom7',
            name: 'Dominant "Major-Minor" 7th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'maj7',
            name: 'Major 7th',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7]
        },
        /*{
            id: 'maj9',
            name: 'Major 9',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9]
        },
        {
            id: 'maj11',
            name: 'Major 11',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11]
        },
        {
            id: 'maj13',
            name: 'Major 13',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11, INTERVALS.M13]
        },*/
        {
            id: 'aug',
            name: 'Augmented Triad',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5]
        },
        {
            id: 'aug7',
            name: 'Augmented Seventh',
            intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5, INTERVALS.m7]
        },
        {
            id: 'min',
            name: 'Minor Triad',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5]
        },
        {
            id: 'min6',
            name: 'Minor 6th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'min7',
            name: 'Minor 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'minMaj7',
            name: 'Minor-Major 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M7]
        },
        {
            id: 'dim',
            name: 'Diminished Triad',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5]
        },
        {
            id: 'dim7',
            name: 'Diminished 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.d7]
        },
        {
            id: 'halfDim7',
            name: 'Half-Diminished 7th',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.m7]
        }
    ];