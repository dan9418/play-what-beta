class Key {
    constructor(homeDegreeDef, accidentalDef) {
        this.homeDegree = homeDegreeDef.absoluteDegree;
        this.accidental = accidentalDef.offset;
        this.homePosition = MODES.Ionian.intervals[this.homeDegree - 1].semitones + this.accidental;
    }
}