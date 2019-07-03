class Key {
    constructor(diatonicDegree, accidentalDef) {
        this.degree = diatonicDegree.diatonicDegree;
        this.accidental = accidentalDef.offset;
        this.homePosition = SCALE_CONFIG.data[0].intervals[this.degree - 1].semitones + this.accidental;
    }
}