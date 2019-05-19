let CONCEPTS = {
	Chords: 0,
	Modes: 1
}

let NOTES = {
	C: { id: 'C', name: 'C', degreeInC: 1, positionInC: 0	},
	D: { id: 'D', name: 'D', degreeInC: 2, positionInC: 2	},
	E: { id: 'E', name: 'E', degreeInC: 3, positionInC: 4	},
	F: { id: 'F', name: 'F', degreeInC: 4, positionInC: 5	},
	G: { id: 'G', name: 'G', degreeInC: 5, positionInC: 7	},
	A: { id: 'A', name: 'A', degreeInC: 6, positionInC: 9	},
	B: { id: 'B', name: 'B', degreeInC: 7, positionInC: 11	}
};

let BASE_NOTES = [NOTES.C, NOTES.D, NOTES.E, NOTES.F, NOTES.G, NOTES.A, NOTES.B];

let INTERVALS = {
	PU: { id: 'PU',		name: 'Perfect Unison',	base: true,		degree: 1,	semitones: 0  },
	m2: { id: 'm2',		name: 'Minor 2nd',		base: true,		degree: 2,	semitones: 1  },
	M2: { id: 'M2',		name: 'Major 2nd',		base: true,		degree: 2,	semitones: 2  },
	m3: { id: 'm3',		name: 'Minor 3rd',		base: true,		degree: 3,	semitones: 3  },
	M3: { id: 'M3',		name: 'Major 3rd',		base: true,		degree: 3,	semitones: 4  },
	P4: { id: 'P4',		name: 'Perfect 4th',	base: true,		degree: 4,	semitones: 5  },
	A4: { id: 'A4',		name: 'Augmented 4th',	base: false,	degree: 4,	semitones: 6  },
	TT: { id: 'TT',		name: 'Tritone',		base: true,		degree: 0,	semitones: 6  },
	d5: { id: 'd5',		name: 'Diminished 5th',	base: false,	degree: 5,	semitones: 6  },
	P5: { id: 'P5',		name: 'Perfect 5th',	base: true,		degree: 5,	semitones: 7  },
	A5: { id: 'A5',		name: 'Augmented 5th',	base: false,	degree: 5,	semitones: 8  },
	m6: { id: 'm6',		name: 'Minor 6th',		base: true,		degree: 6,	semitones: 8  },
	M6: { id: 'M6',		name: 'Major 6th',		base: true,		degree: 6,	semitones: 9  },
	d7: { id: 'd7',		name: 'Diminished 7th',	base: false,	degree: 7,	semitones: 9  },
	m7: { id: 'm7',		name: 'Minor 7th',		base: true,		degree: 7,	semitones: 10 },
	M7: { id: 'M7',		name: 'Major 7th',		base: true,		degree: 7,	semitones: 11 },
	P8: { id: 'P8',		name: 'Perfect Octave',	base: true,		degree: 1,	semitones: 12 }
};

let MAJOR_INTERVALS = [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7];

let CHORDS = {
	Maj_Tri:	{ id: 'MAJ_TRI',	name: 'Major Triad',				intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5]				},
	Maj_6:		{ id: 'MAJ_6',		name: 'Major 6th',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]	},
	Dom_7:		{ id: 'DOM_7',		name: 'Dominant "Major-Minor" 7th',	intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.m7]	},
	Maj_7:		{ id: 'MAJ_7',		name: 'Major 7th',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7]	},
	Aug_Tri:	{ id: 'AUG_TRI',	name: 'Augmented Triad',			intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5]				},
	Aug_7:		{ id: 'AUG_7',		name: 'Augmented Seventh',			intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5, INTERVALS.m7]	},
	Min_Tri:	{ id: 'MIN_TRI',	name: 'Minor Triad',				intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5]				},
	Min_6:		{ id: 'MIN_6',		name: 'Minor 6th',					intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M6]	},
	Min_7:		{ id: 'MIN_7',		name: 'Minor 7th',					intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.m7]	},
	Min_Maj_7:	{ id: 'MIN_MAJ_7',	name: 'Minor-Major 7th',			intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M7]	},
	Dim_Tri:	{ id: 'DIM_TRI',	name: 'Diminished Triad',			intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5]				},
	Dim_7:		{ id: 'DIM_7',		name: 'Diminished 7th',				intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.d7]	},
	Half_Dim_7:	{ id: 'HALF_DIM_7',	name: 'Half-Diminished 7th',		intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.m7]	}
};

let ALL_CHORDS = [
	CHORDS.Maj_Tri, CHORDS.Maj_6, CHORDS.Dom_7, CHORDS.Maj_7,
	CHORDS.Aug_Tri, CHORDS.Aug_7,
	CHORDS.Min_Tri, CHORDS.Min_6, CHORDS.Min_7, CHORDS.Min_Maj_7,
	CHORDS.Dim_Tri, CHORDS.Dim_7, CHORDS.Half_Dim_7
];

let MODES = {
	Ionian:		{ id: 'IONIAN',		name: 'Ionian (Major)', 			degree: 1 },
	Dorian:		{ id: 'DORIAN',		name: 'Dorian', 					degree: 2 },
	Phrygian:	{ id: 'PHRYGIAN',	name: 'Phrygian', 					degree: 3 },
	Lydian:		{ id: 'LYDIAN',		name: 'Lydian', 					degree: 4 },
	Mixolydian:	{ id: 'MIXOLYDIAN',	name: 'Mixolydian', 				degree: 5 },
	Aeolian:	{ id: 'AEOLIAN',	name: 'Aeolian (Natual Minor)', 	degree: 6 },
	Locrian:	{ id: 'LOCRIAN',	name: 'Locrian', 					degree: 7 }
};

let ALL_MODES = [MODES.Ionian, MODES.Dorian, MODES.Phrygian, MODES.Lydian, MODES.Mixolydian, MODES.Aeolian, MODES.Locrian];