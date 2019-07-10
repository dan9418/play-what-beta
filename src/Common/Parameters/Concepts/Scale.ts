import { IConcept } from "../IParamConfig";

export class Scale implements IConcept {
    typeId: string = 'scale';
    definition: any;
    options: any;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return this.definition.intervals;
    }
}