import * as React from "react";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { Note } from "../../Common/TheoryTypes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import { relative } from "path";

export enum KeyboardKeyType {
    Black,
    White
}

export interface KeyboardKeyProps {
    type: KeyboardKeyType;
    note: Note;
    keyLabel: NOTE_LABEL;
    scale: number;
}

export function KeyboardKey(props: KeyboardKeyProps) {
    let keyColor = (props.type === KeyboardKeyType.White) ? 'white' : 'black';
    let colorClass = (props.note.interval !== null) ? `degree-${props.note.interval.degree}` : keyColor;
    let classes = ['keyboard-key', colorClass];

    /*return props.type === KeyboardKeyType.White ?
        <div
            className='test-key test-key-white'
            style={{
                width: props.scale + 'px',
                height: 3 * props.scale + 'px'
            }}
        ></div>
        :
        <div
            className='test-key-black-container'
        >
            <div
                className='test-key test-key-black'
                style={{
                    width: .9 * props.scale + 'px',
                    paddingTop: .8 * 3 * props.scale + 'px'
                }}
            ></div>
        </div>
        ;*/
    return (
        <div className={`keyboard-key-container ${keyColor}`}>
            {(props.type === KeyboardKeyType.White) ?
                <div className={classes.join(' ')}
                    style={{
                        width: props.scale + 'px',
                        height: 3 * props.scale + 'px'
                    }}
                >
                    <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(props.note, props.keyLabel)}</div>
                </div>
                :
                <div className={classes.join(' ')}
                    style={{
                        width: .5 * props.scale + 'px',
                        height: .8 * 3 * props.scale + 'px',
                        right: .5 * .5 * props.scale + 'px'
                    }}
                >
                    <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(props.note, props.keyLabel)}</div>
                </div>}
        </div>
    );
}