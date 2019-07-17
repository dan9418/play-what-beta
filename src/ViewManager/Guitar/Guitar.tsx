import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./Guitar.css";
import { TheoryEngine, Note } from "../../Common/TheoryEngine";

interface IGuitarString {
    openPosition: number
}

export class GuitarNeck extends React.Component<any> {
    strings: IGuitarString[];

    constructor(props) {
        super(props);
        this.strings = [
            { openPosition: 16 },  // e
            { openPosition: 11 },  // B
            { openPosition: 7 },  // G
            { openPosition: 2 },  // D
            { openPosition: -3 },  // A
            { openPosition: -8 }   // E   
        ];
    }

    getGuitarStrings = () => {
        return this.strings.map((string, index) => {
            return <GuitarString
                key={index}
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

export class GuitarString extends React.Component<any> {

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
                note={this.getNote(this.props.openPosition + i)}
                config={this.props.config}
            />);
        }
        return frets;
    }

    render = () => {
        return <div className='guitar-string'>{this.getFrets()}</div>;
    };
}

export class GuitarFret extends React.Component<any> {

    constructor(props) {
        super(props);
    }

    getLabel = (): string => {
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
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : 'wood';
        let classes = ['guitar-fret', colorClass];
        if (this.props.fretNumber === 0)
            classes.push('guitar-fret-open');

        return <div
            className={classes.join(' ')}
            onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
        >{this.getLabel()}</div>;
    };
}