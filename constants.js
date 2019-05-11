let BASE_NOTES = [
	{ name: 'C', degreeInC: 1, positionInC: 0 },
	{ name: 'D', degreeInC: 2, positionInC: 2 },
	{ name: 'E', degreeInC: 3, positionInC: 4 },
	{ name: 'F', degreeInC: 4, positionInC: 5 },
	{ name: 'G', degreeInC: 5, positionInC: 7 },
	{ name: 'A', degreeInC: 6, positionInC: 9 },
	{ name: 'B', degreeInC: 7, positionInC: 11 }
];

let PU = { name: 'Perfect Unison',	base: true,		degree: 1,	semitones: 0  };
let m2 = { name: 'Minor 2nd',		base: true,		degree: 2,	semitones: 1  };
let M2 = { name: 'Minor 2nd',		base: true,		degree: 2,	semitones: 2  };
let m3 = { name: 'Minor 3rd',		base: true,		degree: 3,	semitones: 3  };
let M3 = { name: 'Major 3rd',		base: true,		degree: 3,	semitones: 4  };
let P4 = { name: 'Perfect 4th',		base: true,		degree: 4,	semitones: 5  };
let A4 = { name: 'Augmented 4th',	base: false,	degree: 4,	semitones: 6  };
let TT = { name: 'Tritone',			base: true,		degree: 0,	semitones: 6  };
let d5 = { name: 'Diminished 5th',	base: false,	degree: 5,	semitones: 6  };
let P5 = { name: 'Perfect 5th',		base: true,		degree: 5,	semitones: 7  };
let A5 = { name: 'Augmented 5th',	base: false,	degree: 5,	semitones: 8  };
let m6 = { name: 'Minor 6th',		base: true,		degree: 6,	semitones: 8  };
let M6 = { name: 'Major 6th',		base: true,		degree: 6,	semitones: 9  };
let d7 = { name: 'Diminished 7th',	base: false,	degree: 7,	semitones: 9  };
let m7 = { name: 'Minor 7th',		base: true,		degree: 7,	semitones: 10 };
let M7 = { name: 'Major 7th',		base: true,		degree: 7,	semitones: 11 };
let P8 = { name: 'Perfect Octave',	base: true,		degree: 1,	semitones: 12 };

let BASE_INTERVALS = [PU, m2, M2, m3, M3, P4, A4, TT, d5, P5, A5, m6, M6, m7, M7, P8];

let MAJOR_INTERVALS = [PU, M2, M3, P4, P5, M6, M7];
//let MINOR_INTERVALS = [PU, m2, m3, P4, P5, m6, m7];
//let MAJOR_STEPS = [M2, M2, m2, M2, M2, M2, m2];
//let MAJOR_SCALE_TONES = [0,2,4,5,7,9,11];

let CHORDS = [
	{ name: 'Major Triad',					intervals: [PU, M3, P5]},
	{ name: 'Major 6th',					intervals: [PU, M3, P5, M6]},
	{ name: 'Dominant "Major-Minor" 7th',	intervals: [PU, M3, P5, m7]},
	{ name: 'Major 7th',					intervals: [PU, M3, P5, M7]},
	{ name: 'Augmented Triad',				intervals: [PU, M3, A5]},
	{ name: 'Augmented Seventh',			intervals: [PU, M3, A5, m7]},
	{ name: 'Minor Triad',					intervals: [PU, m3, P5]},
	{ name: 'Minor 6th',					intervals: [PU, m3, P5, M6]},
	{ name: 'Minor 7th',					intervals: [PU, m3, P5, m7]},
	{ name: 'Minor-Major 7th',				intervals: [PU, m3, P5, M7]},
	{ name: 'Diminished Triad',				intervals: [PU, m3, d5]},
	{ name: 'Diminished 7th',				intervals: [PU, m3, d5, d7]},
	{ name: 'Half-Diminished 7th',			intervals: [PU, m3, d5, m7]}
];

let MODES = [
	{ name: 'Ionian (Major)', 				degree: 1 },
	{ name: 'Dorian', 						degree: 2 },
	{ name: 'Phrygian', 					degree: 3 },
	{ name: 'Lydian', 						degree: 4 },
	{ name: 'Mixolydian', 					degree: 5 },
	{ name: 'Aeolian (Natual Minor)', 		degree: 6 },
	{ name: 'Locrian', 						degree: 7 }
];