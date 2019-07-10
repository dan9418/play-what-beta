import { IConcept } from "../IParamConfig";
import { IModeOptions, IModeDef } from "./ModeConfig";

export class Mode implements IConcept {
    typeId: string = 'mode';
    definition: IModeDef;
    options: IModeOptions;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return this.definition.intervals;
    }
}