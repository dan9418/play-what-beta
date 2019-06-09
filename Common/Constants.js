// Concepts

let CONCEPTS = {
    Label:         { id: 'label',         name: 'Labels',			active: false },
    Degree:        { id: 'degree',        name: 'Degrees',			active: false },
    Accidental:    { id: 'accidental',    name: 'Accidentals',		active: false },
    Interval:      { id: 'interval',      name: 'Intervals',		active: true },
    Chord:         { id: 'chord',         name: 'Chords',			active: true },
    Scale:         { id: 'scale',         name: 'Scales',			active: true },
    Mode:          { id: 'mode',          name: 'Modes',			active: true },
    RomanNumeral:  { id: 'romanNumeral',  name: 'Roman Numerals',	active: true }
};

let ALL_CONCEPTS = [CONCEPTS.Label, CONCEPTS.Degree, CONCEPTS.Accidental, CONCEPTS.Interval,
    CONCEPTS.Chord, CONCEPTS.Scale, CONCEPTS.Mode, CONCEPTS.RomanNumeral];

// Labels

let LABELS = {
    None:               { id: 'None',               name: 'None'},
    Name:               { id: 'Name',               name: 'Name'},
    Interval:           { id: 'Interval',           name: 'Interval'},
    RelativePosition:   { id: 'RelativePosition',   name: 'Relative Position'},
    AbsolutePosition:   { id: 'AbsolutePosition',   name: 'Absolute Position'},
    RelativeDegree:     { id: 'RelativeDegree',     name: 'Relative Degree'},
	AbsoluteDegree:     { id: 'AbsoluteDegree',     name: 'Absolute Degree'},
	Octave:     		{ id: 'Octave',     		name: 'Octave'},
    Frequency:          { id: 'Frequency',          name: 'Frequency'}
};

let ALL_LABELS = [LABELS.None, LABELS.Name, LABELS.Interval, LABELS.RelativePosition, LABELS.AbsolutePosition,
    LABELS.RelativeDegree, LABELS.AbsoluteDegree, LABELS.Octave, LABELS.Frequency];

// Intervals

let INTERVALS = {
	PU: { id: 'PU',		name: 'Perfect Unison',	base: true,		relativeDegree: 1,	semitones: 0  },
	m2: { id: 'm2',		name: 'Minor 2nd',		base: true,		relativeDegree: 2,	semitones: 1  },
	M2: { id: 'M2',		name: 'Major 2nd',		base: true,		relativeDegree: 2,	semitones: 2  },
	m3: { id: 'm3',		name: 'Minor 3rd',		base: true,		relativeDegree: 3,	semitones: 3  },
	M3: { id: 'M3',		name: 'Major 3rd',		base: true,		relativeDegree: 3,	semitones: 4  },
	P4: { id: 'P4',		name: 'Perfect 4th',	base: true,		relativeDegree: 4,	semitones: 5  },
	A4: { id: 'A4',		name: 'Augmented 4th',	base: false,	relativeDegree: 4,	semitones: 6  },
	TT: { id: 'TT',		name: 'Tritone',		base: true,		relativeDegree: 0,	semitones: 6  },
	d5: { id: 'd5',		name: 'Diminished 5th',	base: false,	relativeDegree: 5,	semitones: 6  },
	P5: { id: 'P5',		name: 'Perfect 5th',	base: true,		relativeDegree: 5,	semitones: 7  },
	A5: { id: 'A5',		name: 'Augmented 5th',	base: false,	relativeDegree: 5,	semitones: 8  },
	m6: { id: 'm6',		name: 'Minor 6th',		base: true,		relativeDegree: 6,	semitones: 8  },
	M6: { id: 'M6',		name: 'Major 6th',		base: true,		relativeDegree: 6,	semitones: 9  },
	d7: { id: 'd7',		name: 'Diminished 7th',	base: false,	relativeDegree: 7,	semitones: 9  },
	m7: { id: 'm7',		name: 'Minor 7th',		base: true,		relativeDegree: 7,	semitones: 10 },
	M7: { id: 'M7',		name: 'Major 7th',		base: true,		relativeDegree: 7,	semitones: 11 },
	P8: { id: 'P8',		name: 'Perfect Octave',	base: true,		relativeDegree: 1,	semitones: 12 }
};

let ALL_INTERVALS = [
	INTERVALS.PU,
	INTERVALS.m2,
	INTERVALS.M2,
	INTERVALS.m3,
	INTERVALS.M3,
	INTERVALS.P4,
	/*INTERVALS.TT,*/ INTERVALS.A4, INTERVALS.d5,
	INTERVALS.P5,
	INTERVALS.A5, INTERVALS.m6,
	INTERVALS.M6, INTERVALS.d7,
	INTERVALS.m7,
	INTERVALS.M7,
	INTERVALS.P8
];

// Home degrees

let HOME_DEGREES = {
	C: { id: 'C', name: 'C', absoluteDegree: 1, relativePosition: 0	},
	D: { id: 'D', name: 'D', absoluteDegree: 2, relativePosition: 2	},
	E: { id: 'E', name: 'E', absoluteDegree: 3, relativePosition: 4	},
	F: { id: 'F', name: 'F', absoluteDegree: 4, relativePosition: 5	},
	G: { id: 'G', name: 'G', absoluteDegree: 5, relativePosition: 7	},
	A: { id: 'A', name: 'A', absoluteDegree: 6, relativePosition: 9	},
	B: { id: 'B', name: 'B', absoluteDegree: 7, relativePosition: 11 }
};

let ALL_HOME_DEGREES = [HOME_DEGREES.C, HOME_DEGREES.D, HOME_DEGREES.E, HOME_DEGREES.F, HOME_DEGREES.G, HOME_DEGREES.A, HOME_DEGREES.B];

// Accidentals

let ACCIDENTALS = {
	DoubleSharp:	{ id: 'DoubleSharp',	name: 'xx',	offset:  2 },
	Sharp:			{ id: 'Sharp',			name: '#',	offset:  1 },
	Natural:		{ id: 'Natural',		name: '♮',	offset:  0 },
	Flat:			{ id: 'Flat',			name: 'b',	offset: -1 },
	DoubleFlat:		{ id: 'DoubleFlat',		name: 'bb',	offset: -2 }
};

let ALL_ACCIDENTALS = [ACCIDENTALS.DoubleSharp, ACCIDENTALS.Sharp, ACCIDENTALS.Natural, ACCIDENTALS.Flat, ACCIDENTALS.DoubleFlat];

// Chords

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

// Scales

let SCALES = {
	Major:				{ id: 'Major',				name: 'Major', 				intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
	NatualMinor:		{ id: 'NatualMinor',		name: 'Natual Minor', 		intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7] },
	MajorPentatonic:	{ id: 'MajorPentatonic',	name: 'Major Pentatonic', 	intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6] },
	MinorPentatonic:	{ id: 'MinorPentatonic',	name: 'Minor Pentatonic', 	intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m7] }
};

let ALL_SCALES = [SCALES.Major, SCALES.NatualMinor, SCALES.MajorPentatonic, SCALES.MinorPentatonic];

// Modes

let MODES = {
	Ionian:		{ id: 'IONIAN',		name: 'Ionian (Major)', 			relativeDegree: 1, intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
	Dorian:		{ id: 'DORIAN',		name: 'Dorian', 					relativeDegree: 2, intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7] },
	Phrygian:	{ id: 'PHRYGIAN',	name: 'Phrygian', 					relativeDegree: 3, intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7] },
	Lydian:		{ id: 'LYDIAN',		name: 'Lydian', 					relativeDegree: 4, intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.A4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
	Mixolydian:	{ id: 'MIXOLYDIAN',	name: 'Mixolydian', 				relativeDegree: 5, intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.m7] },
	Aeolian:	{ id: 'AEOLIAN',	name: 'Aeolian (Natual Minor)', 	relativeDegree: 6, intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7] },
	Locrian:	{ id: 'LOCRIAN',	name: 'Locrian', 					relativeDegree: 7, intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.m3, INTERVALS.P4, INTERVALS.d5, INTERVALS.m6, INTERVALS.m7] }
};

let ALL_MODES = [MODES.Ionian, MODES.Dorian, MODES.Phrygian, MODES.Lydian, MODES.Mixolydian, MODES.Aeolian, MODES.Locrian];

