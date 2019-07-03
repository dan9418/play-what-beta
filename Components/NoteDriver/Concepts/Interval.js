class Interval {
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return [INTERVAL_CONFIG.data[0], this.definition];
    }
}