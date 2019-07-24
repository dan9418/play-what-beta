import * as React from "react";
import "./GuitarView.css";
import { Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarString } from "./GuitarString";
import { DropdownSelector } from "../Selectors/DropdownSelector";
import { GUITAR_NOTE_LABEL_PARAMETER } from "./GuitarConfig";
import { SwitchSelector } from "../Selectors/SwitchSelector";

export interface GuitarConfig {
    guitarNoteLabel: string;
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
            guitarNoteLabel: 'interval',
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
                tuneString={(position) => { this.tuneString(index + 1, position); }}
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

    render = () => {
        return <>
            <div className='guitar'>
                {this.getGuitarStrings()}
            </div>
            <div className='guitar-config'>
                <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
                <SwitchSelector parameter={{ id: 'showDots', name: 'Show Dots' }} updateParameter={this.updateParameter} />
                <SwitchSelector parameter={{ id: 'filterOctave', name: 'Filter Octave' }} updateParameter={this.updateParameter} />
            </div>
        </>;
    };
}