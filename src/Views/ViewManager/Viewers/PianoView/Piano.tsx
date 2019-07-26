import * as React from "react";
import "../CommonView.css";
import "./PianoView.css";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { PianoKeyType } from "./PianoConfig";
import { PianoKey } from "./PianoKey";
import { DropdownSelector } from "../../Selectors/DropdownSelector";
import { NOTE_LABEL_PARAMETER } from "../../../../Parameters/DisplayParameters";
import { SwitchSelector } from "../../Selectors/SwitchSelector";
import { InputGroup } from "../../Selectors/InputGroup/InputGroup";
import { InputWrapper } from "../../Selectors/InputGroup/InputWrapper";
import { Parameter } from "../../../../Parameters/MasterParameters";
import { RangeSelector } from "../../Selectors/RangeSelector";

export interface PianoConfig {
    noteLabel: Parameter;
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
    keys: IPianoKey[];

    constructor(props) {
        super(props);

        this.state = {
            noteLabel: {id: 'interval'} as any,
            filterOctave: false,
            keyLow: 0,
            keyHigh: 24,
            keys: this.getKeys(0, 24)
        }
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
                note.relativePosition === (absolutePosition % 12) :
                note.relativePosition === (absolutePosition % 12 + 12);
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
                note={this.getNote(index)}
                config={this.state}
            />;
        });
    }

    changeHighKey= (hi) => {
        this.setState((oldState) => {
            return {
                keyHigh: hi
            };
        });
    }

    changeLowKey= (lo) => {
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
            <div className='piano-config'>
                <InputGroup name='Keys'>
                    <InputWrapper name='Label'>
                        <DropdownSelector parameter={NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Filter Octave'>
                        <SwitchSelector parameter={{ id: 'filterOctave', name: 'Filter Octave' }} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Range' vertical={true}>
                        <RangeSelector low={this.state.keyLow} high={this.state.keyHigh} updateLow={this.changeLowKey} updateHigh={this.changeHighKey} updateBoth={this.changeKeyRange} min={-100} max={100}/>
                    </InputWrapper>
                </InputGroup>
            </div>
        </>;
    }
}