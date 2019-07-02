class Interval {
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return [CONCEPT_CONFIG.interval.data[0], this.definition];
    }
}