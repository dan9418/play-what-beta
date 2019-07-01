class ConceptDef {
    constructor(config) {
        this.config = config;
        this.id = config.id;
        this.name = config.name;
        this.defaultId = config.defaultId;
        this.defaultOptions = config.defaultOptions;
        this.data = config.data;
    }

    getIntervals = () => {
        if(this.config.intervals)
            return this.config.intervals;
        else
            return [this.config];
    }
}