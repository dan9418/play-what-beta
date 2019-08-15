import * as React from "react";
import "./PianoView.css";
import "../../Theory/TheoryStyles.css";
import { PianoKeyType, PianoConfig } from "./PianoConfig";
import { Note } from "../../Theory/TheoryConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { TheoryEngine2 } from "../../Theory/TheoryEngine2";

type PianoKeyProps = {
    type: PianoKeyType;
    note: Note;
    config: PianoConfig;
}

export class PianoKey extends React.Component<PianoKeyProps, null> {

    constructor(props) {
        super(props);
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
                <div className="piano-key-label">{TheoryEngine2.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
            </div>
        </div>;
    };
}