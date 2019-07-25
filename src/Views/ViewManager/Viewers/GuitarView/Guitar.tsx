import * as React from "react";
import "../CommonView.css";
import "./GuitarView.css";
import { Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarString } from "./GuitarString";
import { DropdownSelector } from "../../Selectors/DropdownSelector";
import { GUITAR_NOTE_LABEL_PARAMETER } from "./GuitarConfig";
import { SwitchSelector } from "../../Selectors/SwitchSelector";
import { Tuner } from "./Tuner";
import { InputWrapper } from "../../Selectors/InputGroup/InputWrapper";
import { InputGroup } from "../../Selectors/InputGroup/InputGroup";
import { Parameter } from "../../../../Parameters/MasterParameters";

export interface GuitarConfig {
    guitarNoteLabel: Parameter;
    showDots: boolean;
    filterOctave: boolean;
    strings: IGuitarString[];
}

interface IGuitarString {
    openPosition: number
}

type GuitarProps = {
    notes: Note[];
    config: any
};

export class Guitar extends React.Component<GuitarProps, GuitarConfig> {

    constructor(props) {
        super(props);
        this.state = {
            guitarNoteLabel: { id: 'interval' } as any,
            showDots: false,
            filterOctave: false,
            strings: [
                { openPosition: 16 },   // e
                { openPosition: 11 },   // B
                { openPosition: 7 },    // G
                { openPosition: 2 },    // D
                { openPosition: -3 },   // A
                { openPosition: -8 }    // E   
            ]
        }
    }

    getGuitarStrings = () => {
        return this.state.strings.map((string, index) => {
            return <GuitarString
                key={index}
                stringNumber={index + 1}
                notes={this.props.notes}
                openPosition={string.openPosition}
                config={this.state}
            />;
        });
    }

    updateParameter = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    tuneString = (stringNumber, openPosition) => {
        this.setState((oldState) => {
            let newStrings = [];
            for (let i = 0; i < oldState.strings.length; i++) {
                let newString = ((i + 1) === stringNumber) ? { openPosition: openPosition } : oldState.strings[i];
                newStrings.push(newString);
            }
            return {
                strings: newStrings
            }
        });
    }

    getTuners = () => {
        let tuners = [];
        for (let i = 0; i < this.state.strings.length; i++) {
            tuners.push(<Tuner
                key={i}
                openPosition={this.state.strings[i].openPosition}
                tuneString={(position) => { this.tuneString(i + 1, position); }}
                removeString={() => { this.removeString(i); }}
            />);
        }
        return tuners;
    }

    insertString = (index) => {
        this.setState((oldState) => {
            return {
                strings: [...oldState.strings.slice(0, index), { openPosition: 0 }, ...oldState.strings.slice(index)]
            };
        });
    }

    removeString = (index) => {
        this.setState((oldState) => {
            return {
                strings: [...oldState.strings.slice(0, index), ...oldState.strings.slice(index + 1)]
            };
        });
    }

    getDotsForFret = (fretNumber: number): string => {
        if (fretNumber === 0)
            return '• •';
        else if (([3, 5, 7, 9] as any).includes(fretNumber))
            return '•';
        return '';
    }

    getDots = () => {
        let dots = [];
        for (let i = 0; i <= 12; i++) {
            dots.push(<div className='guitar-fret-dots' key={i}>
                {this.getDotsForFret(i % 12)}
            </div>);
        }
        return dots;
    }

    render = () => {
        return <>
            <div className='guitar'>
                {this.getGuitarStrings()}
                <div className='dots-container'>
                    {this.state.showDots && this.getDots()}
                </div>
            </div>
            <div className='guitar-config'>
                <InputGroup name='Strings'>
                    <div className='string-controls'><div className='string-button insert' onClick={() => this.insertString(0)}>+</div></div>
                    {this.getTuners()}
                    <div className='string-controls'><div className='string-button insert' onClick={() => this.insertString(this.state.strings.length)}>+</div></div>
                </InputGroup>

                <InputGroup name='Frets'>
                    <InputWrapper name='Label'>
                        <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Show Dots'>
                        <SwitchSelector parameter={{ id: 'showDots', name: 'Show Dots' }} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Filter Octave'>
                        <SwitchSelector parameter={{ id: 'filterOctave', name: 'Filter Octave' }} updateParameter={this.updateParameter} />
                    </InputWrapper>
                </InputGroup>
            </div>
        </>;
    };
}