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

let ALL_CONCEPTS = [CONCEPTS.Interval, CONCEPTS.Chord, CONCEPTS.Scale, CONCEPTS.Mode, CONCEPTS.RomanNumeral];

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
	PU: { id: 'PU',			name: 'Perfect Unison',	relativeDegree: 1,	degree: 1,	semitones: 0  },
	m2: { id: 'm2',			name: 'Minor 2nd',		relativeDegree: 2,	degree: 2,	semitones: 1  },
	M2: { id: 'M2',			name: 'Major 2nd',		relativeDegree: 2,	degree: 2,	semitones: 2  },
	m3: { id: 'm3',			name: 'Minor 3rd',		relativeDegree: 3,	degree: 3,	semitones: 3  },
	M3: { id: 'M3',			name: 'Major 3rd',		relativeDegree: 3,	degree: 3,	semitones: 4  },
	P4: { id: 'P4',			name: 'Perfect 4th',	relativeDegree: 4,	degree: 4,	semitones: 5  },
	A4: { id: 'A4',			name: 'Augmented 4th',	relativeDegree: 4,	degree: 4,	semitones: 6  },
	TT: { id: 'TT',			name: 'Tritone',		relativeDegree: 0,	degree: 0,	semitones: 6  },
	d5: { id: 'd5',			name: 'Diminished 5th',	relativeDegree: 5,	degree: 5,	semitones: 6  },
	P5: { id: 'P5',			name: 'Perfect 5th',	relativeDegree: 5,	degree: 5,	semitones: 7  },
	A5: { id: 'A5',			name: 'Augmented 5th',	relativeDegree: 5,	degree: 5,	semitones: 8  },
	m6: { id: 'm6',			name: 'Minor 6th',		relativeDegree: 6,	degree: 6,	semitones: 8  },
	M6: { id: 'M6',			name: 'Major 6th',		relativeDegree: 6,	degree: 6,	semitones: 9  },
	d7: { id: 'd7',			name: 'Diminished 7th',	relativeDegree: 7,	degree: 7,	semitones: 9  },
	m7: { id: 'm7',			name: 'Minor 7th',		relativeDegree: 7,	degree: 7,	semitones: 10 },
	M7: { id: 'M7',			name: 'Major 7th',		relativeDegree: 7,	degree: 7,	semitones: 11 },
	P8: { id: 'P8',			name: 'Perfect Octave',	relativeDegree: 1,	degree: 8,	semitones: 12 },
	m9: { id: 'm9',			name: 'Minor 9th',		relativeDegree: 2,	degree: 9,	semitones: 13  },
	M9: { id: 'M9',			name: 'Major 9th',		relativeDegree: 2,	degree: 9,	semitones: 14  },
	m10: { id: 'm10',		name: 'Minor 10th',		relativeDegree: 3,	degree: 10,	semitones: 15  },
	M10: { id: 'M10',		name: 'Major 10th',		relativeDegree: 3,	degree: 10,	semitones: 16  },
	P11: { id: 'P11',		name: 'Perfect 11th',	relativeDegree: 4,	degree: 11,	semitones: 17  },
	A11: { id: 'A11',		name: 'Augmented 11h',	relativeDegree: 4,	degree: 11,	semitones: 18  },
	dTT: { id: 'dTT',		name: 'Double Tritone',	relativeDegree: 0,	degree: 0,	semitones: 18  },
	d12: { id: 'd12',		name: 'Diminished 12th',relativeDegree: 5,	degree: 12,	semitones: 18  },
	P12: { id: 'P12',		name: 'Perfect 12th',	relativeDegree: 5,	degree: 12,	semitones: 19  },
	A12: { id: 'A12',		name: 'Augmented 12th',	relativeDegree: 5,	degree: 12,	semitones: 20  },
	m13: { id: 'm13',		name: 'Minor 13th',		relativeDegree: 6,	degree: 13,	semitones: 20  },
	M13: { id: 'M13',		name: 'Major 13th',		relativeDegree: 6,	degree: 13,	semitones: 21  },
	d14: { id: 'd14',		name: 'Diminished 14th',relativeDegree: 7,	degree: 14,	semitones: 21  },
	m14: { id: 'm14',		name: 'Minor 14th',		relativeDegree: 7,	degree: 14,	semitones: 22 },
	M14: { id: 'M14',		name: 'Major 14th',		relativeDegree: 7,	degree: 14,	semitones: 23 }
};

let ALL_INTERVALS = [
	INTERVALS.PU,
	INTERVALS.m2,
	INTERVALS.M2,
	INTERVALS.m3,
	INTERVALS.M3,
	INTERVALS.P4,
	INTERVALS.TT, INTERVALS.A4, INTERVALS.d5,
	INTERVALS.P5,
	INTERVALS.A5, INTERVALS.m6,
	INTERVALS.M6, INTERVALS.d7,
	INTERVALS.m7,
	INTERVALS.M7,
	INTERVALS.P8,
	INTERVALS.m9,
	INTERVALS.M9,
	INTERVALS.m10,
	INTERVALS.M10,
	INTERVALS.P11,
	INTERVALS.dTT, INTERVALS.A11, INTERVALS.d12,
	INTERVALS.P12,
	INTERVALS.A12, INTERVALS.m13,
	INTERVALS.M13, INTERVALS.d14,
	INTERVALS.m14,
	INTERVALS.M14
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
	DoubleFlat:		{ id: 'DoubleFlat',		name: 'bb',	offset: -2 },
	Flat:			{ id: 'Flat',			name: 'b',	offset: -1 },
	Natural:		{ id: 'Natural',		name: '♮',	offset:  0 },
	Sharp:			{ id: 'Sharp',			name: '#',	offset:  1 },
	DoubleSharp:	{ id: 'DoubleSharp',	name: 'xx',	offset:  2 }
};

let ALL_ACCIDENTALS = [ACCIDENTALS.DoubleSharp, ACCIDENTALS.Sharp, ACCIDENTALS.Natural, ACCIDENTALS.Flat, ACCIDENTALS.DoubleFlat];

// Chords

let CHORDS = {
	Maj_Tri:	{ id: 'MAJ_TRI',	name: 'Major Triad',				intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5] },
	Sus2:		{ id: 'SUS2',		name: 'Suspended 2nd',				intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.P5] },
	Sus4:		{ id: 'SUS4',		name: 'Suspended 4th',				intervals: [INTERVALS.PU, INTERVALS.P4, INTERVALS.P5] },
	Maj_6:		{ id: 'MAJ_6',		name: 'Major 6th',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6]	},
	Dom_7:		{ id: 'DOM_7',		name: 'Dominant "Major-Minor" 7th',	intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.m7]	},
	Maj_7:		{ id: 'MAJ_7',		name: 'Major 7th',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7]	},
	M9:			{ id: 'M9',			name: 'Major 9',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9]	},
	M11:		{ id: 'M11',		name: 'Major 11',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11] },
	M13:		{ id: 'M13',		name: 'Major 13',					intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.P5, INTERVALS.M7, INTERVALS.M9, INTERVALS.P11, INTERVALS.M13] },
	Aug_Tri:	{ id: 'AUG_TRI',	name: 'Augmented Triad',			intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5] },
	Aug_7:		{ id: 'AUG_7',		name: 'Augmented Seventh',			intervals: [INTERVALS.PU, INTERVALS.M3, INTERVALS.A5, INTERVALS.m7]	},
	Min_Tri:	{ id: 'MIN_TRI',	name: 'Minor Triad',				intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5] },
	Min_6:		{ id: 'MIN_6',		name: 'Minor 6th',					intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M6]	},
	Min_7:		{ id: 'MIN_7',		name: 'Minor 7th',					intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.m7]	},
	Min_Maj_7:	{ id: 'MIN_MAJ_7',	name: 'Minor-Major 7th',			intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P5, INTERVALS.M7]	},
	Dim_Tri:	{ id: 'DIM_TRI',	name: 'Diminished Triad',			intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5] },
	Dim_7:		{ id: 'DIM_7',		name: 'Diminished 7th',				intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.d7]	},
	Half_Dim_7:	{ id: 'HALF_DIM_7',	name: 'Half-Diminished 7th',		intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.d5, INTERVALS.m7]	}
};

let ALL_CHORDS = [
	CHORDS.Maj_Tri, CHORDS.Maj_6,
	CHORDS.Sus2, CHORDS.Sus4,
	CHORDS.Dom_7, CHORDS.Maj_7, CHORDS.M9, CHORDS.M11, CHORDS.M13,
	CHORDS.Aug_Tri, CHORDS.Aug_7,
	CHORDS.Min_Tri, CHORDS.Min_6, CHORDS.Min_7, CHORDS.Min_Maj_7,
	CHORDS.Dim_Tri, CHORDS.Dim_7, CHORDS.Half_Dim_7
];

// Scales

let SCALES = {
	Major:				{ id: 'Major',				name: 'Major', 				intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P4, INTERVALS.P5, INTERVALS.M6, INTERVALS.M7] },
	NatualMinor:		{ id: 'NatualMinor',		name: 'Natual Minor', 		intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m6, INTERVALS.m7] },
	MajorPentatonic:	{ id: 'MajorPentatonic',	name: 'Major Pentatonic', 	intervals: [INTERVALS.PU, INTERVALS.M2, INTERVALS.M3, INTERVALS.P5, INTERVALS.M6] },
	MinorPentatonic:	{ id: 'MinorPentatonic',	name: 'Minor Pentatonic', 	intervals: [INTERVALS.PU, INTERVALS.m3, INTERVALS.P4, INTERVALS.P5, INTERVALS.m7] },
	Chromatic:			{ id: 'Chromatic',			name: 'Chromatic', 			intervals: [INTERVALS.PU, INTERVALS.m2, INTERVALS.M2, INTERVALS.m3, INTERVALS.M3, INTERVALS.P4, INTERVALS.TT, INTERVALS.P5, INTERVALS.m6, INTERVALS.M6, INTERVALS.m7, INTERVALS.M7] }
};

let ALL_SCALES = [SCALES.Major, SCALES.NatualMinor, SCALES.MajorPentatonic, SCALES.MinorPentatonic, SCALES.Chromatic];

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

// Modes

let ROMAN_NUMERALS = {
	Major: { id: 'Major', name: 'Major', chords: [
		{
			name: 'I',
			relativeDegree: 1,
			chord: CHORDS.Maj_Tri
		},
		{
			name: 'ii',
			relativeDegree: 2,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'iii',
			relativeDegree: 3,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'IV',
			relativeDegree: 4,
			chord: CHORDS.Maj_Tri
		},
		{
			name: 'V',
			relativeDegree: 5,
			chord: CHORDS.Maj_Tri
		},
		{
			name: 'vi',
			relativeDegree: 6,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'vii°',
			relativeDegree: 7,
			chord: CHORDS.Dim_Tri
		}
	] },
	Minor: { id: 'Minor', name: 'Minor', chords: [
		{
			name: 'i',
			relativeDegree: 1,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'ii°',
			relativeDegree: 2,
			chord: CHORDS.Dim_Tri
		},
		{
			name: 'III',
			relativeDegree: 3,
			chord: CHORDS.Maj_Tri
		},
		{
			name: 'iv',
			relativeDegree: 4,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'v',
			relativeDegree: 5,
			chord: CHORDS.Min_Tri
		},
		{
			name: 'VI',
			relativeDegree: 6,
			chord: CHORDS.Maj_Tri
		},
		{
			name: 'VII',
			relativeDegree: 7,
			chord: CHORDS.Maj_Tri
		}
	] }
};

let ALL_ROMAN_NUMERALS = [ROMAN_NUMERALS.Major, ROMAN_NUMERALS.Minor];

let SETTINGS = {
	Concept: { id: 'concept', name: 'Concept', data: ALL_CONCEPTS },
	Interval: { id: 'interval', name: 'Interval', data: ALL_INTERVALS },
	Chord: { id: 'chord', name: 'Chord', data: ALL_CHORDS },
	Scale: { id: 'scale', name: 'Scale', data: ALL_SCALES },
	Mode: { id: 'mode', name: 'Mode', data: ALL_MODES },
	RomanNumeral: { id: 'romanNumeral', name: 'Roman Numeral', data: ALL_ROMAN_NUMERALS },
	HomeDegree: { id: 'homeDegree', name: 'Home Degree', data: ALL_HOME_DEGREES },
	Accidental: { id: 'accidental', name: 'Accidental', data: ALL_ACCIDENTALS },
	Label: { id: 'label', name: 'Label', data: ALL_LABELS }
};

let KEY_TREE = [
	{ id: 'homeDegree', name: 'Home Degree', data: ALL_HOME_DEGREES },
	{ id: 'accidental', name: 'Accidental', data: ALL_ACCIDENTALS }
];

let CONCEPT_TREE = [
	{
		id: 'concept',
		name: 'Concept',
		data: ALL_CONCEPTS,
		children: [
			{ condition: CONCEPTS.Interval.id, id: 'interval', name: 'Interval', data: ALL_INTERVALS, displayProp: 'id' },
			{ condition: CONCEPTS.Chord.id, id: 'chord', name: 'Chord', data: ALL_CHORDS },
			{ condition: CONCEPTS.Scale.id, id: 'scale', name: 'Scale', data: ALL_SCALES },
			{ condition: CONCEPTS.Mode.id, id: 'mode', name: 'Mode', data: ALL_MODES },
			{ condition: CONCEPTS.RomanNumeral.id, id: 'romanNumeral', name: 'Roman Numeral', data: ALL_ROMAN_NUMERALS }
		]
	}
];

let LABEL_TREE = [
	{ id: 'label', name: 'Label', data: ALL_LABELS }
];


	
 