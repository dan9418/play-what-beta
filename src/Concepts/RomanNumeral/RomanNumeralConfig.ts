import { Preset, ConceptConfig } from "../../Theory/TheoryConfig";
import { INTERVAL } from "../Interval/IntervalConfig";

export const PRESETS_ROMAN_NUMERAL: Preset<ConceptConfig>[] = [
    {
        id: 'I',
        name: 'I',
        config: {
            intervals: [INTERVAL.PU, INTERVAL.M3, INTERVAL.P5]
        }
    },
    {
        id: 'ii',
        name: 'ii',
        config: {
            intervals: [INTERVAL.M2, INTERVAL.P4, INTERVAL.M6]
        }
    },
    {
        id: 'iii',
        name: 'iii',
        config: {
            intervals: [INTERVAL.M3, INTERVAL.P5, INTERVAL.M7]
        }
    },
    {
        id: 'IV',
        name: 'IV',
        config: {
            intervals: [INTERVAL.P4, INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU })]
        }
    },
    {
        id: 'V',
        name: 'V',
        config: {
            intervals: [INTERVAL.P5, INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 })]
        }
    },
    {
        id: 'vi',
        name: 'vi',
        config: {
            intervals: [INTERVAL.M6, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.PU }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M3 })]
        }
    },
    {
        id: 'vii',
        name: 'vii',
        config: {
            intervals: [INTERVAL.M7, Object.assign({ octaveOffset: 1 }, { ...INTERVAL.M2 }), Object.assign({ octaveOffset: 1 }, { ...INTERVAL.P4 })]
        }
    }
]