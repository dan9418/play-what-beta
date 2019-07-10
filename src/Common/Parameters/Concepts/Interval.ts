import { PARAM_interval, IntervalDef, IntervalOptions } from "./IntervalConfig";
import { IConcept } from "../IParamConfig";

export class Interval implements IConcept {
    typeId: string = 'interval';
    definition: IntervalDef;
    options: IntervalOptions;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return [PARAM_interval.data[0], this.definition];
    }
}