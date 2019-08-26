import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Keyboard.css";
import { Accidental, NoteLabel, Interval, CompleteNote, ConceptConfig, Degree, KeyCenter, Concept } from "../../Common/Theory.config";

export interface KeyboardProps {
    keyCenter: KeyCenter,
    concept: Concept,
    filterOctave: boolean;
    noteLabel: NoteLabel;
    keyLow: number;
    keyHigh: number;
}

export class Keyboard extends React.Component<KeyboardProps, null> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

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

    getNote = (notes: CompleteNote[], noteIndex): CompleteNote => {
        let note = notes.find((note) => { return this.isNoteValid(note, noteIndex) }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(noteIndex);
        return note;
    }

    getKeyboardKeys = (notes: CompleteNote[]) => {
        let keys = [];
        for (let i = this.props.keyLow; i <= this.props.keyHigh; i++) {
            let type = Keyboard.blackKeyIndices.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
            keys.push(
                <KeyboardKey
                    key={i}
                    type={type}
                    note={this.getNote(notes, this.props.keyLow + i)}
                    noteLabel={this.props.noteLabel}
                />
            );
        }
        return keys;
    }

    render = () => {
        let notes = TheoryEngine.parseIntervals(this.props.keyCenter, this.props.concept)
        return (
            <div className='keyboard'>
                {this.getKeyboardKeys(notes)}
            </div>
        );
    }
}