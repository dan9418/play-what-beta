import { Preset } from "../../Theory/TheoryConfig";

/*

export let ALL_NOTE_LABELS = [
	{
		id: 'none',
		name: 'None'
	},
	{
		id: 'name',
		name: 'Name'
	},
	{
		id: 'interval',
		name: 'Interval'
	},
	{
		id: 'pitchClass',
		name: 'Relative Position'
	},
	{
		id: 'absolutePosition',
		name: 'Absolute Position'
	},
	{
		id: 'degree',
		name: 'Degree'
	},
	{
		id: 'degree',
		name: 'Absolute Degree'
	},
	{
		id: 'octave',
		name: 'Octave'
	},
	{
		id: 'frequency',
		name: 'Frequency'
	}
];

let GuitarNoteLabelDefinitions: any[] = [
	{
		id: 'fretNumber',
		name: 'Fret Number'
    }
]

export let GUITAR_NOTE_LABEL_PARAMETER: any = {
    id: 'guitarNoteLabel',
    name: 'Guitar Note Label',
    data: ALL_NOTE_LABELS.concat(GuitarNoteLabelDefinitions)
};*/

export interface GuitarConfig {
    fretLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: GuitarStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface GuitarStringConfig {
    openPosition: number
    voicing?: any;
}
export const ALL_GUITAR_FRET_LABELS = [
    {
        id: 'interval',
        name: 'Interval'
    },
    {
        id: 'name',
        name: 'Name'
    }
]

export const PRESETS_GUITAR_CONFIG: Preset<GuitarConfig>[] = [
    {
        id: 'guitar',
        name: 'Guitar',
        config: {
            fretLabel: { id: 'interval' } as any,
            showDots: true,
            filterOctave: true,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 16 },   // e
                { openPosition: 11 },   // B
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    },
    {
        id: 'bass',
        name: 'Bass',
        config: {
            fretLabel: { id: 'name' } as any,
            showDots: true,
            filterOctave: false,
            fretLow: 0,
            fretHigh: 12,
            strings: [
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    }
]