import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { CompleteNote, KeyboardKeyConfig, KeyboardKeyType } from "../../Common/AppConfig";
import "./Keyboard.css";

type KeyboardProps = {
    notes: CompleteNote[];
    config: any;
}

export class Keyboard extends React.Component<KeyboardProps, null> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

    constructor(props) {
        super(props);
    }

    getKeys = (lo: number, hi: number): KeyboardKeyConfig[] => {
        let keys = [];
        for (let i = lo; i <= hi; i++) {
            let type = Keyboard.blackKeyIndices.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
            keys.push({ noteIndex: i, type: type });
        }
        return keys;
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
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, noteIndex) }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(noteIndex);
        return note;
    }

    getKeyboardKeys = () => {
        return this.getKeys(this.props.config.keyLow, this.props.config.keyHigh)
            .map((key, index) => {
                return <KeyboardKey
                    key={index}
                    type={key.type}
                    note={this.getNote(this.props.config.keyLow + index)}
                    config={this.props.config}
                />;
            });
    }

    render = () => {
        return (
            <div className='keyboard'>
                {this.getKeyboardKeys()}
            </div>
        );
    }
}