export class Scale {
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