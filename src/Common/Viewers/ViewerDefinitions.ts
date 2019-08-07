import { NoteSummary } from "./SummaryView/NoteSummary";
import { Piano } from "./PianoView/Piano";
import { Guitar } from "./GuitarView/Guitar";

export const DEFAULT_CONCEPT_TYPE = {
    id: 'scale',
    name: 'Scales'
}

export const DEFAULT_CONCEPT = {
    typeId: 'scale',
    intervals: []
};

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

