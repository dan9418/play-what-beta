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
    }

    getGuitarStrings = () => {
        return this.props.config.strings.map((string, index) => {
            return <GuitarString
                key={index}
                stringNumber={index + 1}
                notes={this.props.notes}
                openPosition={string.openPosition}
                config={this.props.config}
            />;
        });
    }

    /*updateParameter = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }*/

    /*tuneString = (stringNumber, openPosition) => {
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
    }*/

    /*getTuners = () => {
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
    }*/

    /*insertString = (index) => {
        this.setState((oldState) => {
            return {
                strings: [...oldState.strings.slice(0, index), { openPosition: 0 }, ...oldState.strings.slice(index)]
            };
        });
    }*/

    /*removeString = (index) => {
        this.setState((oldState) => {
            return {
                strings: [...oldState.strings.slice(0, index), ...oldState.strings.slice(index + 1)]
            };
        });
    }*/

    /*changeHighFret = (hi) => {
        this.setState((oldState) => {
            return {
                fretHigh: hi
            };
        });
    }*/

    /*changeLowFret = (lo) => {
        this.setState((oldState) => {
            return {
                fretLow: lo
            };
        });
    }*/

    /*changeFretRange = (delta) => {
        this.setState((oldState) => {
            return {
                fretLow: oldState.fretLow + delta,
                fretHigh: oldState.fretHigh + delta
            };
        });
    }*/

    getDotsForFret = (fretNumber: number): string => {
        if (fretNumber === 0)
            return '• •';
        else if (([3, 5, 7, 9] as any).includes(fretNumber))
            return '•';
        return '';
    }

    getDots = () => {
        let dots = [];
        for (let i = this.props.config.fretLow; i <= this.props.config.fretHigh; i++) {
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
                    {this.props.config.showDots && this.getDots()}
                </div>
            </div>
        </>;
    };
}