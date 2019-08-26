import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { NoteLabel, CompleteNote } from "../../Common/Theory.config";

export enum KeyboardKeyType {
    Black,
    White
}

export interface KeyboardKeyProps {
    type: KeyboardKeyType;
    note: CompleteNote;
    noteLabel: NoteLabel;
}

export class KeyboardKey extends React.Component<KeyboardKeyProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let keyColor = (this.props.type === KeyboardKeyType.White) ? 'white' : 'black';
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : keyColor;
        let classes = ['keyboard-key', colorClass];

        return (
            <div className={`keyboard-key-container keyboard-key-container-${keyColor}`}>
                <div className={classes.join(' ')}>
                    <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(this.props.note, this.props.noteLabel)}</div>
                </div>
            </div>
        );
    };
}