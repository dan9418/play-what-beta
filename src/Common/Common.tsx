import { PARAM_diatonicDegree } from "./Parameters/Base/DiatonicDegreeConfig";
import { PARAM_accidental } from "./Parameters/Base/AccidentalConfig";
import { PARAM_conceptType } from "./Parameters/Base/ConceptTypeConfig";
import { PARAM_interval } from "./Parameters/Concepts/IntervalConfig";
import { PARAM_direction } from "./Parameters/Base/DirectionConfig";
import { PARAM_inversion } from "./Parameters/Base/InversionConfig";
import { PARAM_scale } from "./Parameters/Concepts/ScaleConfig";
import { PARAM_chord } from "./Parameters/Concepts/ChordConfig";
import { PARAM_mode } from "./Parameters/Concepts/ModeConfig";

export interface Parameter {
	id: string;
	name: string;
}

export interface ParameterGroup extends Parameter {
	children: ParameterChild[];
}

export interface ParameterChild extends Parameter {
	filters?: any[];
	component?: any;
	conditions?: any[];
	data: any[];
}

export let MASTER_PARAMETERS: ParameterGroup[] = [
		{
			id: 'key',
			name: 'Key',
			children: [
				{
					id: 'diatonicDegree',
					name: 'Diatonic Degree',
					component: null,
					data: PARAM_diatonicDegree.data
				},
				{
					id: 'accidental',
					name: 'Accidental',
					component: null,
					data: PARAM_accidental.data
				}
			]
		},
		{
			id: 'concept',
			name: 'Concept',
			children: [
				{
					id: 'type',
					name: 'Type',
					component: null,
					data: PARAM_conceptType.data
				},
				{
					id: 'interval',
					name: 'Interval',
					data: PARAM_interval.data,
					conditions: [
						{
							property: 'concept_type',
							value: 'interval'
						}
					]
				},
				{
					id: 'chord',
					name: 'Chord',
					data: PARAM_chord.data,
					conditions: [
						{
							property: 'concept_type',
							value: 'chord'
						}
					]
				},
				{
					id: 'scale',
					name: 'Scale',
					data: PARAM_scale.data,
					conditions: [
						{
							property: 'concept_type',
							value: 'scale'
						}
					]
				},
				{
					id: 'mode',
					name: 'Mode',
					component: null,
					data: PARAM_mode.data,
					conditions: [
						{
							property: 'concept_type',
							value: 'mode'
						}
					]
				}
			]
		}
	];
			
export let LABEL_CONFIG = {
	Labels: {
		id: 'label',
		name: 'Label',
		data: [
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
				id: 'relativePosition',
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
				id: 'absoluteDegree',
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
		]
	}
}