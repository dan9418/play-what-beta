import * as React from "react";
import "./PianoView.css";
import "../../../../TheoryCore/TheoryStyles.css";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { PianoKeyType } from "./PianoConfig";
import { PianoConfig } from "./Piano";

type PianoKeyProps = {
    type: PianoKeyType;
    note: Note;
    config: PianoConfig;
}

export class PianoKey extends React.Component<PianoKeyProps, PianoConfig> {

    constructor(props) {
        super(props);
    }

    getLabel = (): string | number => {
        let note = this.props.note;
        switch (this.props.config.noteLabel) {
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