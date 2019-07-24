import * as React from "react";
import "./GuitarView.css";
import { Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarString } from "./GuitarString";
import { DropdownSelector } from "../Common/DropdownSelector";
import { GUITAR_NOTE_LABEL_PARAMETER } from "./GuitarConfig";

export interface GuitarConfig {
    guitarNoteLabel: string;
}

interface IGuitarString {
    openPosition: number
}

type GuitarProps = {
    notes: Note[];
    config: any
};

export class Guitar extends React.Component<GuitarProps, GuitarConfig> {
    strings: IGuitarString[];

    constructor(props) {
        super(props);
        this.strings = [
            { openPosition: 16 },   // e
            { openPosition: 11 },   // B
            { openPosition: 7 },    // G
            { openPosition: 2 },    // D
            { openPosition: -3 },   // A
            { openPosition: -8 }    // E   
        ];
        this.state = {
            guitarNoteLabel: 'interval'
        }
    }

    getGuitarStrings = () => {
        return this.strings.map((string, index) => {
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

    render = () => {
        return <>
            <div className='guitar'>
                {this.getGuitarStrings()}
            </div>
            <div className='guitar-config'>
                <DropdownSelector parameter={GUITAR_NOTE_LABEL_PARAMETER} updateParameter={this.updateParameter} />
            </div>
        </>;
    };
}