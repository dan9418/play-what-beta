import { IParamConfig, IParamDef } from "../IParamConfig";
import { INTERVALS, IntervalDef } from "./IntervalConfig";
import { PARAM_direction } from "../Base/DirectionConfig";

export interface ScaleDef extends IParamDef {
    intervals: IntervalDef[];
}

export let PARAM_scale: IParamConfig<ScaleDef> = {
    id: 'scale',
    name: 'Scales',
    options: [
        PARAM_direction
    ],
    data: [
        {
            id: 'major',
            name: 'Major',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7]
        },
        {
            id: 'natualMinor',
            name: 'Natual Minor',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7]
        },
        {
            id: 'harmonicMinor',
            name: 'Harmonic Minor',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.M7]
        },
        {
            id: 'majorPentatonic',
            name: 'Major Pentatonic',
            intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]
        },
        {
            id: 'minorPentatonic',
            name: 'Minor Pentatonic',
            intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m7]
        },
        {
            id: 'chromatic',
            name: 'Chromatic',
            intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.M2, INTERVALS.m3, INTERVALS.M3, INTERVALS.P4, INTERVALS.TT, INTERVALS.P5, INTERVALS.m6, INTERVALS.M6, INTERVALS.m7, INTERVALS.M7]
        }
    ]
};