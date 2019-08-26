import React = require("react");
import { FretboardString, FretboardStringConfig } from "./FretboardString";
import "./Fretboard.css";
import { CompleteNote, Interval, NoteLabel, Concept, KeyCenter } from "../../Common/Theory.config";
import { TheoryEngine } from "../../Common/TheoryEngine";

export interface FretboardProps {
    keyCenter: KeyCenter,
    concept: Concept,
    noteLabel: NoteLabel,
    filterOctave: boolean,
    showDots: boolean;
    strings: FretboardStringConfig[];
    fretLow: number;
    fretHigh: number;
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
        let notes = TheoryEngine.parseIntervals(this.props.keyCenter, this.props.concept)
        return this.props.strings.map((string, index) => {
            return <FretboardString
                key={index}
                filterOctave={this.props.filterOctave}
                notes={string.filteredIntervals ? this.filterNotes(notes, string.filteredIntervals) : notes}
                noteLabel={this.props.noteLabel}
                openPosition={string.openPosition}
                fretLow={this.props.fretLow}
                fretHigh={this.props.fretHigh}
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
        for (let i = this.props.fretLow; i <= this.props.fretHigh; i++) {
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
                    {this.props.showDots && this.getDots()}
                </div>
            </div>
        );
    };
}