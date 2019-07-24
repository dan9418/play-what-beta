import { NOTE_LABEL_PARAMETER } from "../../../../Parameters/DisplayParameters";
import { Parameter, ParameterConfig } from "../../../../Parameters/MasterParameters";

let GuitarNoteLabelDefinitions: Parameter[] = [
	{
		id: 'fretNumber',
		name: 'Fret Number'
    }
]

export let GUITAR_NOTE_LABEL_PARAMETER: ParameterConfig = {
    id: 'guitarNoteLabel',
    name: 'Guitar Note Label',
    data: NOTE_LABEL_PARAMETER.data.concat(GuitarNoteLabelDefinitions)
};