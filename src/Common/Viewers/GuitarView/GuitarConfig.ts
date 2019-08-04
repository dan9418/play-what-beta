import { ALL_NOTE_LABELS } from "../ViewerDefinitions";

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
};