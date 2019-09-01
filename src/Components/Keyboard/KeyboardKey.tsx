import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { CompleteNote } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";

export enum KeyboardKeyType {
    Black,
    White
}

export interface KeyboardKeyProps {
    type: KeyboardKeyType;
    note: CompleteNote;
    keyLabel: NOTE_LABEL;
}

export function KeyboardKey(props: KeyboardKeyProps) {
    let keyColor = (props.type === KeyboardKeyType.White) ? 'white' : 'black';
    let colorClass = (props.note.interval !== null) ? `degree-${props.note.interval.degree}` : keyColor;
    let classes = ['keyboard-key', colorClass];

    return (
        <div className={`keyboard-key-container keyboard-key-container-${keyColor}`}>
            <div className={classes.join(' ')}>
                <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(props.note, props.keyLabel)}</div>
            </div>
        </div>
    );
}