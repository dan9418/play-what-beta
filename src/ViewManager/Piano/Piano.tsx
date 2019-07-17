import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./Piano.css";
import { TheoryEngine, Note } from "../../Common/TheoryEngine";

enum PianoKeyType {
    Black,
    White
}

interface IPianoKey {
    absolutePosition: number;
    type: PianoKeyType;
}

type PianoProps = {
    notes: Note[];
    config: any;
}

export class Piano extends React.Component<PianoProps> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;
    keys: IPianoKey[];

    constructor(props) {
        super(props);
        this.keys = [];

        for (let i = 0; i < 25; i++) {
            let type = Piano.blackKeyIndices.includes(i % 12) ? PianoKeyType.White : PianoKeyType.Black;
            this.keys.push({ absolutePosition: i, type: type });
        }
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => {
            return note.relativePosition === (absolutePosition % 12);
        }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }

    getPianoKeys = () => {
        return this.keys.map((key, index) => {
            return <PianoKey
                key={index}
                type={key.type}
                note={this.getNote(index)}
                config={this.props.config}
            />;
        });
    }

    render = () => {
        return <div className='piano'>{this.getPianoKeys()}</div>;
    }
}

type PianoKeyProps = {
    type: PianoKeyType;
    note: Note;
    config: any;
}

export class PianoKey extends React.Component<PianoKeyProps> {

    constructor(props) {
        super(props);
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
        let keyColor = (this.props.type === PianoKeyType.White) ? 'white' : 'black';
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : keyColor;
        let classes = ['piano-key', colorClass];

        return <div className={`piano-key-container piano-key-container-${keyColor}`}>
            <div
                className={classes.join(' ')}
                onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
            >
                <div className="piano-key-label">{this.getLabel()}</div>
            </div>
        </div>;
    };
}