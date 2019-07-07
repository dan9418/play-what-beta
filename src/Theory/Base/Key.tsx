import { PARAM_scale } from "../../Common/Parameters/Concepts/ScaleConfig";

export class Key {
    degree: any;
    accidental: any;
    homePosition: any;
    
    constructor(diatonicDegree, accidentalOffset) {
        this.degree = diatonicDegree;
        this.accidental = accidentalOffset;
        this.homePosition = PARAM_scale.data[0].intervals[this.degree - 1].semitones + this.accidental;
    }
}