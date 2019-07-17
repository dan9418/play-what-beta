import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./Guitar.css";
import { TheoryEngine, Note } from "../../Common/TheoryEngine";

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

type GuitarStringProps = {
    notes: Note[];
    stringNumber: number;
    openPosition: number;
    config: any
};

export class GuitarString extends React.Component<GuitarStringProps> {

    constructor(props) {
        super(props);
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => {
            return note.relativePosition === (absolutePosition % 12);
        }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }

    getFrets = () => {
        let frets = [];
        for (let i = 0; i <= 12; i++) {
            frets.push(<GuitarFret
                key={i}
                fretNumber={i}
                stringNumber={this.props.stringNumber}
                note={this.getNote(this.props.openPosition + i)}
                config={this.props.config}
            />);
        }
        return frets;
    }

    render = () => {
        return <div className='guitar-string'>
            {this.getFrets()}
            <div className='guitar-fret-string' />
        </div>;
    };
}

type GuitarFretProps = {
    fretNumber: number;
    stringNumber: number;
    note: Note;
    config: any;
}

export class GuitarFret extends React.Component<GuitarFretProps> {

    constructor(props) {
        super(props);
    }

    getDots = (fretNumber: number): string => {
        if(fretNumber === 0)
            return '• •';
        else if (([3, 5, 7, 9] as any).includes(fretNumber))
            return '•';
        return '';
    }

    getLabel = (): string | number => {
        let note = this.props.note;
        switch (this.props.config.label) {
            case 'none':
                return '';
            case 'name':
                return note.name;
            case 'interval':
                return note.interval.id;
            case 'relativePosition':
                return note.relativePosition;
            case 'absolutePosition':
                return note.absolutePosition;
            case 'degree':
                return note.interval.degree;
            case 'absoluteDegree':
                return note.absoluteDegree;
            case 'octave':
                return note.octave;
            case 'frequency':
                return note.frequency;
            default:
                return '';
        }
    }

    render = () => {
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : '';
        let classes = ['guitar-fret', 'wood'];
        let labelClasses = [colorClass, 'guitar-fret-label']
        if (this.props.fretNumber === 0)
            classes.push('guitar-fret-open');

        return <div
            className={classes.join(' ')}
            onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
        >
            {this.props.stringNumber === 6 && <div className='guitar-fret-dots'>{this.getDots(this.props.fretNumber % 12)}</div>}
            <div className={labelClasses.join(' ')}>{this.getLabel()}</div>
        </div>;
    };
}