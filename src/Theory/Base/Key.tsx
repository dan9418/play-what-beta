import { ScaleDefinitions } from "../../Parameters/Concept/ScaleDefinitions";

export class Key {
    degree: any;
    accidental: any;
    homePosition: any;
    
    constructor(diatonicDegree, accidentalOffset) {
        this.degree = diatonicDegree;
        this.accidental = accidentalOffset;
        this.homePosition = ScaleDefinitions[0].intervals[this.degree - 1].semitones + this.accidental;
    }
}