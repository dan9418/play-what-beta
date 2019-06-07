class FunctionalNote {
	constructor(key, interval) {
        this.key = key;
        this.interval = interval;
        this.absoluteDegree = (key.homeDegree - 1 + interval.relativeDegree - 1) % 7 + 1;
        this.relativePosition = (key.homePosition + interval.semitones) % 12;
        this.accidental = this.relativePosition - MODES.Ionian.intervals[this.absoluteDegree - 1].semitones;
        if(this.relativePosition === 0 && this.accidental < 0) this.accidental += 12;
        if(this.relativePosition === -1 && this.accidental < 0) this.relativePosition += 12;
        this.name = ALL_NOTES[this.absoluteDegree - 1].id + this.getAccidentalString(this.accidental);
    }
    
    getAccidentalString = (accidental) => {
		switch(accidental) {
		  case 0:
				return ''
		  case 1:
				return '#';
		  case 2:
				return 'x';
		  case -1:
				return 'b';
		  case -2:
				return 'bb';
		  default:
				if(accidental < 0) {
					return -accidental + 'b';
				} else if (accidental > 0) {
					return accidental + '#';
				}
		}
	};
}