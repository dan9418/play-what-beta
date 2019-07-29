import { DiatonicDegreeDefinitions } from "./Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "./Key/AccidentalConfig";
import { ConceptTypeDefinitions } from "./Concept/ConceptTypeDefinitions";
import { IntervalDefinitions } from "./Concept/IntervalDefinitions";
import { ChordDefinitions } from "./Concept/ChordDefinitions";
import { ScaleDefinitions } from "./Concept/ScaleDefinitions";
import { ModeDefinitions } from "./Concept/ModeDefinitions";
import { ViewerDefinitions } from "./Viewers/ViewerConfig";

/* Base Parameter */

export interface Parameter {
	id: string;
	name: string;
}

/* Parameter Organization */

export interface ParameterGroup {
	id: string;
	name: string;
	children: ParameterConfig[];
}

export interface ParameterConfig {
	id: string;
	name: string;
	filters?: any[];
	component?: any;
	conditions?: any[];
	data: any[];
}

/* Parameter Definitions */

export let MASTER_PARAMETERS: ParameterGroup[] = [
	{
		id: 'key',
		name: 'Key',
		children: [
			{
				id: 'diatonicDegree',
				name: 'Diatonic Degree',
				component: null,
				data: DiatonicDegreeDefinitions
			},
			{
				id: 'accidental',
				name: 'Accidental',
				component: null,
				data: AccidentalDefinitions
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
				data: ConceptTypeDefinitions
			},
			{
				id: 'interval',
				name: 'Interval',
				data: IntervalDefinitions,
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
				data: ChordDefinitions,
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
				data: ScaleDefinitions,
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
				data: ModeDefinitions,
				conditions: [
					{
						property: 'concept_type',
						value: 'mode'
					}
				]
			}
		]
	},
	{
		id: 'viewer',
		name: 'Viewer',
		children: [
			{
				id: 'value',
				name: 'Value',
				component: null,
				data: ViewerDefinitions
			}
		]
	},
];