import { CompleteNote, FretboardConfig } from "../../../Common/AppConfig";
import React = require("react");
import { TheoryEngine } from "../../../Common/TheoryEngine";
import { FretboardFret } from "./FretboardFret";

type FretboardStringProps = {
    notes: CompleteNote[];
    stringNumber: number;
    openPosition: number;
    config: FretboardConfig
};

export class FretboardString extends React.Component<FretboardStringProps, null> {

    constructor(props) {
        super(props);
    }

    isNoteValid = (note: CompleteNote, noteIndex: number): boolean => {
        if (this.props.config.filterOctave) {
            return note.noteIndex === noteIndex;
        }
        else {
            return (noteIndex >= 0) ?
                note.pitchClass === (noteIndex % 12) :
                note.pitchClass === (noteIndex % 12 + 12);
        }
    }

    getNote = (noteIndex): CompleteNote => {
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, noteIndex); }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(noteIndex);
        return note;
    }


    getFrets = () => {
        let frets = [];
        for (let i = this.props.config.fretLow; i <= this.props.config.fretHigh; i++) {
            frets.push(<FretboardFret
                key={i}
                fretNumber={i}
                stringNumber={this.props.stringNumber}
                note={this.getNote(this.props.openPosition + i)}
                config={this.props.config}
            />);
        }
        return frets;
    }

    render = () => {
        return <div className='fretboard-string'>
            {this.getFrets()}
            <div className='fretboard-fret-string' />
        </div>;
    };
}