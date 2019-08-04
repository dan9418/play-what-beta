import * as React from "react";
import "./PianoView.css";
import { PianoKeyType } from "./PianoConfig";
import { PianoKey } from "./PianoKey";
import { Note } from "../../Theory/TheoryDefinitions";
import { TheoryEngine } from "../../Theory/TheoryEngine";

export interface PianoConfig {
    noteLabel: any;
    filterOctave: boolean;
    keyLow: number;
    keyHigh: number;
    keys: IPianoKey[];
}

interface IPianoKey {
    absolutePosition: number;
    type: PianoKeyType;
}

type PianoProps = {
    notes: Note[];
    config: any;
}

export class Piano extends React.Component<PianoProps, PianoConfig> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;

    constructor(props) {
        super(props);

        this.state = this.props.config;
    }

    getKeys = (lo: number, hi: number): IPianoKey[] => {
        let keys = [];
        for (let i = lo; i <= hi; i++) {
            let type = Piano.blackKeyIndices.includes(i % 12) ? PianoKeyType.White : PianoKeyType.Black;
            keys.push({ absolutePosition: i, type: type });
        }
        return keys;
    }

    isNoteValid = (note: Note, absolutePosition: number): boolean => {
        if (this.state.filterOctave) {
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
        return this.getKeys(this.state.keyLow, this.state.keyHigh)
            .map((key, index) => {
                return <PianoKey
                    key={index}
                    type={key.type}
                    note={this.getNote(this.state.keyLow + index)}
                    config={this.state}
                />;
            });
    }

    changeHighKey = (hi) => {
        this.setState((oldState) => {
            return {
                keyHigh: hi
            };
        });
    }

    changeLowKey = (lo) => {
        this.setState((oldState) => {
            return {
                keyLow: lo
            };
        });
    }

    changeKeyRange = (delta) => {
        this.setState((oldState) => {
            return {
                keyLow: oldState.keyLow + delta,
                keyHigh: oldState.keyHigh + delta
            };
        });
    }

    updateParameter = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    render = () => {
        return <>
            <div className='piano'>
                {this.getPianoKeys()}
            </div>
        </>;
    }
}