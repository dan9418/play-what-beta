import * as React from 'react';
import { TheoryEngine } from '../../Common/TheoryEngine';
import { Note } from '../../Common/TheoryTypes';
import { NOTE_LABEL } from '../../Common/TheoryConstants';

// Key dimensions relative to white key width
const KEY__DIMS = {
    WhW_WhH: 4.6875, // White key width to white key height
    WhW_BlW: 0.6250, // White key width to black key width
    WhW_BlH: 2.9688 // White key width to black hey height
}

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
    let scaleStyles = getScaleStyles(props.type, props.scale);
    let classes = ['keyboard-key', `${keyColor}-key`];
    classes.push((props.note.interval !== null) ? `degree-${props.note.interval.degree}` : keyColor);

    return (
        <div className={`${keyColor}-key-container`}>
            <div className={classes.join(' ')} style={scaleStyles}>
                <div className='keyboard-key-label'>{TheoryEngine.getNoteLabel(props.note, props.keyLabel)}</div>
            </div>
        </div>
    );
}

function getScaleStyles(keyType: KeyboardKeyType, scale: number) {
    switch (keyType) {
        case KeyboardKeyType.White:
            return {
                width: scale + 'px',
                height: KEY__DIMS.WhW_WhH * scale + 'px'
            };
        case KeyboardKeyType.Black:
            return {
                width: KEY__DIMS.WhW_BlW * scale + 'px',
                height: KEY__DIMS.WhW_BlH * scale + 'px',
                right: .5 * KEY__DIMS.WhW_BlW * scale + 'px'
            };
        default:
            return {
                width: '0px',
                height: '0px'
            }
    }
}