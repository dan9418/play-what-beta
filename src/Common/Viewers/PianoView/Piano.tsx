import * as React from "react";
import "./PianoView.css";
import { PianoKeyType, PianoKeyConfig } from "./PianoConfig";
import { PianoKey } from "./PianoKey";
import { Note } from "../../Theory/TheoryDefinitions";
import { TheoryEngine } from "../../Theory/TheoryEngine";

type PianoProps = {
    notes: Note[];
    config: any;
}

export class Piano extends React.Component<PianoProps, null> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

    constructor(props) {
        super(props);
    }

    getKeys = (lo: number, hi: number): PianoKeyConfig[] => {
        let keys = [];
        for (let i = lo; i <= hi; i++) {
            let type = Piano.blackKeyIndices.includes(i % 12) ? PianoKeyType.White : PianoKeyType.Black;
            keys.push({ absolutePosition: i, type: type });
        }
        return keys;
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
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, absolutePosition) }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }

    getPianoKeys = () => {
        return this.getKeys(this.props.config.keyLow, this.props.config.keyHigh)
            .map((key, index) => {
                return <PianoKey
                    key={index}
                    type={key.type}
                    note={this.getNote(this.props.config.keyLow + index)}
                    config={this.props.config}
                />;
            });
    }

    render = () => {
        return (
            <div className='piano'>
                {this.getPianoKeys()}
            </div>
        );
    }
}