import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../../Common/TheoryEngine";
import "./Keyboard.css";
import { ViewerConfig, ViewerProps } from "../Viewer.config";
import { CompleteNote } from "../../../Common/Theory.config";

export interface KeyboardConfig extends ViewerConfig {
    keyLow: number;
    keyHigh: number;
}

export interface KeyboardProps extends ViewerProps {
    config: KeyboardConfig;
}

export class Keyboard extends React.Component<KeyboardProps, null> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

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
        let note = this.props.notes.find((note) => { return this.isNoteValid(note, noteIndex) }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(noteIndex);
        return note;
    }

    getKeyboardKeys = () => {
        let keys = [];
        for (let i = this.props.config.keyLow; i <= this.props.config.keyHigh; i++) {
            let type = Keyboard.blackKeyIndices.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
            keys.push(
                <KeyboardKey
                    key={i}
                    type={type}
                    note={this.getNote(this.props.config.keyLow + i)}
                    noteLabel={this.props.config.noteLabel}
                />
            );
        }
        return keys;
    }

    render = () => {
        return (
            <div className='keyboard'>
                {this.getKeyboardKeys()}
            </div>
        );
    }
}