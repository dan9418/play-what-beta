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

export function KeyboardKey(props: KeyboardKeyProps) {
    let keyColor = (props.type === KeyboardKeyType.White) ? 'white' : 'black';
    let colorClass = (props.note.interval.id !== '') ? `degree-${props.note.interval.degree}` : keyColor;
    let classes = ['keyboard-key', colorClass];

    return (
        <div className={`keyboard-key-container keyboard-key-container-${keyColor}`}>
            <div className={classes.join(' ')}>
                <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(props.note, props.noteLabel)}</div>
            </div>
        </div>
    );
}