import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./PitchClassSet.css";
import { e } from "../../App";
import { DiatonicDegreeDefinitions } from "../../Parameters/Key/DiatonicDegreeConfig";
import { TheoryEngine, Note } from "../../Common/TheoryEngine";

export class PitchClass extends React.Component<any> {
    physicalNote: any;
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let note = this.props.note as Note;
        let classes = ['note', `degree-${note.interval.degree}`];

        return <div className={classes.join(' ')} onClick={() => TheoryEngine.playNote(note)}>
            <div className='note-row note-row-top'>
                <div className='note-relative-position'>{note.relativePosition}</div>
                <div className='note-absolute-position'>{note.absolutePosition}</div>
            </div>
            <div className='note-row note-row-mid'>
                <div className='note-name'>{note.name}</div>
                <div className='note-octave'>{note.octave}</div>
            </div>
            <div className='note-row note-row-bot'>
                <div className='note-interval'>{note.interval.id}</div>
                <div className='note-frequency'>{note.frequency + ' Hz'}</div>
            </div>
        </div>;
    };
}

export class PitchClassSet extends React.Component<any> {
	
	constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        let startingPosition = (this.props.notes.length) ? DiatonicDegreeDefinitions[this.props.notes[0].key.diatonicDegree.degree - 1].homePostition : 0;
        for(let absolutePosition = startingPosition; absolutePosition < startingPosition + 12; absolutePosition++) {
            // Find or create note
            let note = this.props.notes.find((n) => { return n.relativePosition === (absolutePosition % 12) }) || null;
            if(note === null)
                note = TheoryEngine.getNonfunctionalNote(absolutePosition);
            // Add note
            noteDisplays.push(
                <PitchClass
                    key={`note-display-${absolutePosition}`}
                    note={note}
                    {...this.props}
                />
            );
        }
        return noteDisplays;
    }

	render = () => {
		return <div>{this.getNoteDisplays()}</div>;
    };
}