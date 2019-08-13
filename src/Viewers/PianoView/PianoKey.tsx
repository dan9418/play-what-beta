import * as React from "react";
import "./PianoView.css";
import "../../Theory/TheoryStyles.css";
import { PianoKeyType, PianoConfig } from "./PianoConfig";
import { Note } from "../../Theory/TheoryConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";

type PianoKeyProps = {
    type: PianoKeyType;
    note: Note;
    config: PianoConfig;
}

export class PianoKey extends React.Component<PianoKeyProps, null> {

    constructor(props) {
        super(props);
    }

    getLabel = (): string | number => {
        let note = this.props.note;
        switch (this.props.config.noteLabel.id) {
            case 'none':
                return '';
            case 'name':
                return note.name;
            case 'interval':
                return note.interval.id;
            case 'pitchClass':
                return note.pitchClass;
            case 'absolutePosition':
                return note.absolutePosition;
            case 'degree':
                return note.interval.degree;
            case 'degree':
                return note.degree.value;
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