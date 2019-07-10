import { IConcept } from "../IParamConfig";
import { IChordDef, IChordOptions } from "./ChordConfig";

export class Chord implements IConcept {
    definition: IChordDef;
    options: IChordOptions;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return this.definition.intervals;
    }
}