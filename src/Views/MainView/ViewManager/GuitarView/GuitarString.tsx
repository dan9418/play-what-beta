import * as React from "react";
import "./GuitarView.css";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarFret } from "./GuitarFret";
import { GuitarConfig } from "./Guitar";
import { Tuner } from "./Tuner";

type GuitarStringProps = {
    notes: Note[];
    stringNumber: number;
    tuneString: any;
    openPosition: number;
    config: GuitarConfig
};

export class GuitarString extends React.Component<GuitarStringProps, GuitarConfig> {

    constructor(props) {
        super(props);
    }

    isNoteValid = (note: Note, absolutePosition: number): boolean => {
        if (this.props.config.filterOctave) {
            return note.absolutePosition === absolutePosition;
        }
        else {
            return (absolutePosition >= 0) ?
                note.relativePosition === (absolutePosition % 12) :
                note.relativePosition === (absolutePosition % 12 + 12);
        }
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, absolutePosition); }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }

    getTuner = () => {
        return <Tuner openPosition={this.props.openPosition} tuneString={this.props.tuneString} />;
    }

    getFrets = () => {
        let frets = [];
        for (let i = 0; i <= 12; i++) {
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
            {this.getTuner()}
            {this.getFrets()}
            <div className='guitar-fret-string' />
        </div>;
    };
}