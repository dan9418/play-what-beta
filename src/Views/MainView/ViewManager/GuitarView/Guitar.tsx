import * as React from "react";
import "./GuitarView.css";
import { Note } from "../../../../TheoryCore/TheoryEngine";
import { GuitarString } from "./GuitarString";

interface IGuitarString {
    openPosition: number
}

type GuitarProps = {
    notes: Note[];
    config: any
};

export class Guitar extends React.Component<GuitarProps> {
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
    }

    getGuitarStrings = () => {
        return this.strings.map((string, index) => {
            return <GuitarString
                key={index}
                stringNumber={index + 1}
                notes={this.props.notes}
                openPosition={string.openPosition}
                config={this.props.config}
            />;
        });
    }

    render = () => {
        return <div className='guitar'>{this.getGuitarStrings()}</div>;
    };
}