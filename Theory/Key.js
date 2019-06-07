class Key {
    constructor(homeDegree, accidental) {
        this.homeDegree = homeDegree;
        this.accidental = accidental;
        this.homePosition = MODES.Ionian.intervals[homeDegree - 1].semitones + this.accidental;
    }
}