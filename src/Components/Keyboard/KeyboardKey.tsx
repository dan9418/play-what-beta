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
    let classes = ['keyboard-key', `${keyColor}-key`];

    // Apply key scale styles
    let scaleStyles = (props.type === KeyboardKeyType.White) ?
        {
            width: props.scale + 'px',
            height: KEY__DIMS.WhW_WhH * props.scale + 'px'
        }
        :
        {
            width: KEY__DIMS.WhW_BlW * props.scale + 'px',
            height: KEY__DIMS.WhW_BlH * props.scale + 'px',
            right: .5 * KEY__DIMS.WhW_BlW * props.scale + 'px'
        };

    // Apply interval degree, if applicable
    if (props.note.interval !== null) {
        classes.push(`degree-${props.note.interval.degree}`);
    }
    else {
        classes.push(keyColor);
    }

    return (
        <div className={`${keyColor}-key-container`}>
            <div className={classes.join(' ')} style={scaleStyles}>
                <div className='keyboard-key-label'>{TheoryEngine.getNoteLabel(props.note, props.keyLabel)}</div>
            </div>
        </div>
    );
}