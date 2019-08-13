import * as React from "react";
import "./GuitarView.css";
import { GuitarFret } from "./GuitarFret";
import { Note } from "../../Theory/TheoryConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { GuitarConfig } from "./GuitarConfig";

type GuitarStringProps = {
    notes: Note[];
    stringNumber: number;
    openPosition: number;
    config: GuitarConfig
};

export class GuitarString extends React.Component<GuitarStringProps, null> {

    constructor(props) {
        super(props);
    }

    isNoteValid = (note: Note, absolutePosition: number): boolean => {
        if (this.props.config.filterOctave) {
            return note.absolutePosition === absolutePosition;
        }
        else {
            return (absolutePosition >= 0) ?
                note.pitchClass === (absolutePosition % 12) :
                note.pitchClass === (absolutePosition % 12 + 12);
        }
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, absolutePosition); }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }


    getFrets = () => {
        let frets = [];
        for (let i = this.props.config.fretLow; i <= this.props.config.fretHigh; i++) {
            frets.push(<GuitarFret
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
        return <div className='guitar-string'>
            {this.getFrets()}
            <div className='guitar-fret-string' />
        </div>;
    };
}