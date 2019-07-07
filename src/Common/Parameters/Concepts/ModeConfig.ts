import { IParamConfig, IParamDef } from "../IParamConfig";
import { IntervalDef, INTERVALS } from "./IntervalConfig";
import { PARAM_direction } from "../Base/DirectionConfig";

export interface ModeDef extends IParamDef {
    degree: number;
    intervals: IntervalDef[];
}

export let PARAM_mode: IParamConfig<ModeDef> = {
    id: 'mode',
    name: 'Modes',
    options: [
        PARAM_direction
    ],
    data: [
        {
            id: 'ionian',
            name: 'Ionian',
            degree: 1,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'dorian',
            name: 'Dorian',
            degree: 2,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
        },
        {
            id: 'phrygian',
            name: 'Phrygian',
            degree: 3,
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'lydian',
            name: 'Lydian',
            degree: 4,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.A4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'mixolydian',
            name: 'Mixolydian',
            degree: 5,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7]
        },
        {
            id: 'aeolian',
            name: 'Aeolian',
            degree: 6,
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'locrian',
            name: 'Locrian',
            degree: 7,
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.d5, INTERVALS.m6, INTERVALS.m7]
        }
    ]
};