import { INTERVALS } from "../../Common/Parameters/Concepts/IntervalConfig";
import { PARAM_scale } from "../../Common/Parameters/Concepts/ScaleConfig";
import { PARAM_diatonicDegree } from "../../Common/Parameters/Base/DiatonicDegreeConfig";

export class FunctionalNote {
	key: any;
	interval: any;
	absoluteDegree: number;
	relativePosition: number;
	accidental: number;
	name: string;
	
	constructor(key, interval) {
        this.key = key;
				this.interval = interval;
				if(interval.id !== INTERVALS.TT.id) {
					this.absoluteDegree = (key.degree - 1 + interval.degree - 1) % 7 + 1;
					this.relativePosition = (key.homePosition + interval.semitones) % 12;
					this.accidental = this.relativePosition - PARAM_scale.data[0].intervals[this.absoluteDegree - 1].semitones;
					if(this.relativePosition === 0 && this.accidental < 0) this.accidental += 12;
					if(this.relativePosition === -1 && this.accidental < 0) this.relativePosition += 12;
					this.name = PARAM_diatonicDegree.data[this.absoluteDegree - 1].id + this.getAccidentalString(this.accidental);
				} else {
					this.absoluteDegree = 0;
					this.relativePosition = (PARAM_scale.data[0].intervals[key.degree - 1].semitones + 6 + this.key.accidental) % 12;
					this.accidental = 0;
					this.name = INTERVALS.TT.id;
				}
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