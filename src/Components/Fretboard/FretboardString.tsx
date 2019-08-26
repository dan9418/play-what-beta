import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { FretboardFret } from "./FretboardFret";
import { Interval, CompleteNote } from "../../Common/Theory.config";

export interface FretboardStringConfig {
    openPosition: number
    filteredIntervals?: Interval[];
}

export interface FretboardStringProps {
    openPosition: number;
    filterOctave: boolean;
    notes: CompleteNote[];
    noteLabel: any;
    fretLow: number;
    fretHigh: number;
};

export class FretboardString extends React.Component<FretboardStringProps, null> {

    constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for (let i = this.props.fretLow; i <= this.props.fretHigh; i++) {
            frets.push(<FretboardFret
                key={i}
                fretNumber={i}
                note={TheoryEngine.getNote(this.props.notes, this.props.openPosition + i, this.props.filterOctave)}
                noteLabel={this.props.noteLabel}
            />);
        }
        return frets;
    }

    render = () => {
        return <div className='fretboard-string'>
            {this.getFrets()}
            <div className='fretboard-fret-string' />
        </div>;
    };
}