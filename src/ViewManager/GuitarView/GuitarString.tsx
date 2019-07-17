import * as React from "react";
import "../../Common/Common.css";
import "./GuitarView.css";
import { TheoryEngine, Note } from "../../Common/TheoryEngine";
import { GuitarFret } from "./GuitarFret";

type GuitarStringProps = {
    notes: Note[];
    stringNumber: number;
    openPosition: number;
    config: any
};

export class GuitarString extends React.Component<GuitarStringProps> {

    constructor(props) {
        super(props);
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => {
            return note.relativePosition === (absolutePosition % 12);
        }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
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
            {this.getFrets()}
            <div className='guitar-fret-string' />
        </div>;
    };
}