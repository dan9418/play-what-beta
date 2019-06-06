class Key2 {
    constructor(homeDegree, accidental) {
        this.homeDegree = homeDegree;
        this.accidental = accidental;
        this.homePosition = MAJOR_INTERVALS[homeDegree - 1].semitones + this.accidental;
    }
}

class Interval2 {
    constructor(relativeDegree, semitones) {
        this.relativeDegree = relativeDegree;
        this.semitones = semitones;
    }
}

class FunctionalNote {
	constructor(key, interval) {
        this.key = key;
        this.interval = interval;
        this.absoluteDegree = (key.homeDegree - 1 + interval.relativeDegree - 1) % 7 + 1;
        this.relativePosition = (key.homePosition + interval.semitones) % 12;
        this.accidental = this.relativePosition - MAJOR_INTERVALS[this.absoluteDegree - 1].semitones;
        this.name = BASE_NOTES[this.absoluteDegree - 1].id + this.getAccidentalString(this.accidental);
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

class PhysicalNote {
	constructor(absolutePosition) {
        this.absolutePosition = absolutePosition;
        if(absolutePosition >= 0)
            this.relativePosition = absolutePosition % 12;
        else
            this.relativePosition = 12 + (absolutePosition % 12);
        
        this.octave = 4 + Math.floor(absolutePosition / 12);
    }
}