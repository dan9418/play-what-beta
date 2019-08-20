import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { FretboardFret } from "./FretboardFret";
import { Interval, CompleteNote } from "../../Common/Theory.config";

export interface FretboardStringConfig {
    openPosition: number
    filteredIntervals?: Interval[];
}

export interface FretboardStringProps {
    openPosition: number;
    filterOctave: boolean;
    notes: CompleteNote[];
    noteLabel: any;
    fretLow: number;
    fretHigh: number;
};

export class FretboardString extends React.Component<FretboardStringProps, null> {

    constructor(props) {
        super(props);
    }

    isNoteValid = (note: CompleteNote, noteIndex: number): boolean => {
        if (this.props.filterOctave) {
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
        for (let i = this.props.fretLow; i <= this.props.fretHigh; i++) {
            frets.push(<FretboardFret
                key={i}
                fretNumber={i}
                note={this.getNote(this.props.openPosition + i)}
                noteLabel={this.props.noteLabel}
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