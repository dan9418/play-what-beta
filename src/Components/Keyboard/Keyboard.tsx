import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Keyboard.css";
import { NoteLabel, CompleteNote,KeyCenter, Concept, DEGREE, ACCIDENTAL } from "../../Common/Theory.config";

export interface KeyboardProps {
    keyCenter: KeyCenter,
    concept: Concept,
    filterOctave: boolean;
    noteLabel: NoteLabel;
    keyLow: number;
    keyHigh: number;
}

const DEFAULT_KEYBOARD_PROPS: KeyboardProps = {
    keyCenter: {
        degree: DEGREE.C,
        accidental: ACCIDENTAL.Natural,
        octave: 4
    },
    concept: {
        intervals: [],
        intervalOptions: {}
    },
    noteLabel: NoteLabel.Interval,
    filterOctave: true,
    keyLow: 0,
    keyHigh: 24
}

export class Keyboard extends React.Component<KeyboardProps, null> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

    constructor(props) {
        super(props);
    }

    getKeyboardKeys = (notes: CompleteNote[]) => {
        let keys = [];
        for (let i = this.props.keyLow; i <= this.props.keyHigh; i++) {
            let type = Keyboard.blackKeyIndices.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
            keys.push(
                <KeyboardKey
                    key={i}
                    type={type}
                    note={TheoryEngine.getNote(notes, this.props.keyLow + i, this.props.filterOctave)}
                    noteLabel={this.props.noteLabel}
                />
            );
        }
        return keys;
    }

    render = () => {
        let config = Object.assign(DEFAULT_KEYBOARD_PROPS, this.props);
        let notes = TheoryEngine.parseIntervals(this.props.keyCenter, this.props.concept)
        return (
            <div className='keyboard'>
                {this.getKeyboardKeys(notes)}
            </div>
        );
    }
}