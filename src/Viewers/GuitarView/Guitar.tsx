import * as React from "react";
import "./GuitarView.css";
import { GuitarString } from "./GuitarString";
import { Note } from "../../Theory/TheoryConfig";
import { GuitarConfig, GuitarStringConfig } from "./GuitarConfig";
import { Interval } from "../../Concepts/Interval/IntervalConfig";

type GuitarProps = {
    notes: Note[];
    config: GuitarConfig
};

export class Guitar extends React.Component<GuitarProps, null> {

    constructor(props) {
        super(props);
    }

    filterNotes = (notes: Note[], filterIntervals: Interval[]): Note[] => {
        let result = filterIntervals.length
            ? notes.filter((note) => {
                return 'undefined' === typeof filterIntervals.find((interval) => {
                    return interval.id === note.interval.id;
                });
            })
            : notes
        return result;
    }

    getGuitarStrings = () => {
        return this.props.config.strings.map((string, index) => {
            return <GuitarString
                key={index}
                stringNumber={index + 1}
                notes={this.filterNotes(this.props.notes, string.filterIntervals)}
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