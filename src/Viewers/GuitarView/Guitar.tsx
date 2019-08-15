import * as React from "react";
import "./GuitarView.css";
import { GuitarString } from "./GuitarString";
import { Note } from "../../Theory/TheoryConfig";
import { GuitarConfig } from "./GuitarConfig";
import { Interval } from "../../Concepts/Interval/IntervalConfig";

type GuitarProps = {
    notes: Note[];
    config: GuitarConfig
};

export class Guitar extends React.Component<GuitarProps, null> {

    constructor(props) {
        super(props);
    }

    filterNotes = (notes: Note[], filteredIntervals: Interval[]): Note[] => {
        let result = notes.filter((note) => {
            return 'undefined' !== typeof filteredIntervals.find((interval) => {
                return interval.id === note.interval.id;
            });
        });
        return result;
    }

    getGuitarStrings = () => {
        return this.props.config.strings.map((string, index) => {
            return <GuitarString
                key={index}
                stringNumber={index + 1}
                notes={string.filteredIntervals ? this.filterNotes(this.props.notes, string.filteredIntervals) : this.props.notes}
                openPosition={string.openPosition}
                config={this.props.config}
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
            dots.push(<div className='guitar-fret-dots' key={i}>
                {this.getDotsForFret(i % 12)}
            </div>);
        }
        return dots;
    }

    render = () => {
        return (
            <div className='guitar'>
                {this.getGuitarStrings()}
                <div className='dots-container'>
                    {this.props.config.showDots && this.getDots()}
                </div>
            </div>
        );
    };
}