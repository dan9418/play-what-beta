import React = require("react");
import { FretboardString, FretboardStringConfig } from "./FretboardString";
import "./Fretboard.css";
import { CompleteNote, Interval, ViewerProps } from "../../Common/AppConfig";

export interface FretboardConfig {
    noteLabel: any;
    showDots: boolean;
    filterOctave: boolean;
    strings: FretboardStringConfig[];
    fretLow: number;
    fretHigh: number;
}

export interface FretboardProps extends ViewerProps {
    config: FretboardConfig;
};

export class Fretboard extends React.Component<FretboardProps, null> {

    constructor(props) {
        super(props);
    }

    filterNotes = (notes: CompleteNote[], filteredIntervals: Interval[]): CompleteNote[] => {
        let result = notes.filter((note) => {
            return 'undefined' !== typeof filteredIntervals.find((interval) => {
                return interval.id === note.interval.id;
            });
        });
        return result;
    }

    getFretboardStrings = () => {
        return this.props.config.strings.map((string, index) => {
            return <FretboardString
                key={index}
                filterOctave={this.props.config.filterOctave}
                notes={string.filteredIntervals ? this.filterNotes(this.props.notes, string.filteredIntervals) : this.props.notes}
                noteLabel={this.props.config.noteLabel}
                openPosition={string.openPosition}
                fretLow={this.props.config.fretLow}
                fretHigh={this.props.config.fretHigh}
            />;
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
        for (let i = this.props.config.fretLow; i <= this.props.config.fretHigh; i++) {
            dots.push(<div className='fretboard-fret-dots' key={i}>
                {this.getDotsForFret(i % 12)}
            </div>);
        }
        return dots;
    }

    render = () => {
        return (
            <div className='fretboard'>
                {this.getFretboardStrings()}
                <div className='dots-container'>
                    {this.props.config.showDots && this.getDots()}
                </div>
            </div>
        );
    };
}