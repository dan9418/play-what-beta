import { PARAM_interval } from "../../Common/Parameters/Concepts/IntervalConfig";

export class Interval {
    definition: any;
    options: any;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return [PARAM_interval.data[0], this.definition];
    }
}