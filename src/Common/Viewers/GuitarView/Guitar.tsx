import * as React from "react";
import "./GuitarView.css";
import { GuitarString } from "./GuitarString";
import { Tuner } from "./Tuner";
import { Note } from "../../Theory/TheoryDefinitions";

export interface GuitarConfig {
    guitarNoteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: GuitarStringConfig[];
    fretLow: number;
    fretHigh: number;
}

interface GuitarStringConfig {
    openPosition: number
    voicing?: Note;
}

type GuitarProps = {
    notes: Note[];
    config: GuitarConfig
};

export class Guitar extends React.Component<GuitarProps, GuitarConfig> {

    constructor(props) {
        super(props);
        this.state = this.props.config;
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

    changeHighFret = (hi) => {
        this.setState((oldState) => {
            return {
                fretHigh: hi
            };
        });
    }

    changeLowFret = (lo) => {
        this.setState((oldState) => {
            return {
                fretLow: lo
            };
        });
    }

    changeFretRange = (delta) => {
        this.setState((oldState) => {
            return {
                fretLow: oldState.fretLow + delta,
                fretHigh: oldState.fretHigh + delta
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
        for (let i = this.state.fretLow; i <= this.state.fretHigh; i++) {
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
            {/*<div className='guitar-config'>
                <InputGroup name='Strings'>
                    <InputWrapper name='String Count'>
                        <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Tuning'>
                        <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                    </InputWrapper>
                    <InputWrapper name='Voicing'>
                        <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                    </InputWrapper>
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
                    <InputWrapper name='Range' vertical={true}>
                        <RangeSelector low={this.state.fretLow} high={this.state.fretHigh} updateLow={this.changeLowFret} updateHigh={this.changeHighFret} updateBoth={this.changeFretRange} min={0} max={100} />
                    </InputWrapper>
                </InputGroup>
            </div>*/}
        </>;
    };
}