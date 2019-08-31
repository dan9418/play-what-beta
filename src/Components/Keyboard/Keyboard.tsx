import * as React from "react";
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Keyboard.css";
import { ViewerProps } from "../withNotes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";

export interface KeyboardProps extends ViewerProps {
    filterOctave?: boolean;
    keyLabel?: NOTE_LABEL;
    keyLow?: number;
    keyHigh?: number;
}

export const DEFAULT_KEYBOARD_PROPS: KeyboardProps = {
    notes: [],
    keyLabel: NOTE_LABEL.Name,
    filterOctave: false,
    keyLow: 0,
    keyHigh: 24
};

const BLACK_KEY_INDICES: number[] = [0, 2, 4, 5, 7, 9, 11];

function getKeyboardKeys(config: KeyboardProps) {
    let keys = [];
    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(i % 12) ? KeyboardKeyType.White : KeyboardKeyType.Black;
        keys.push(
            <KeyboardKey
                key={i}
                type={type}
                note={TheoryEngine.getNote(config.notes, i, config.filterOctave)}
                keyLabel={config.keyLabel}
            />
        );
    }
    return keys;
}

export function Keyboard(props: KeyboardProps) {
    let config = Object.assign({}, DEFAULT_KEYBOARD_PROPS, props);
    return (
        <div className='keyboard'>
            {getKeyboardKeys(config)}
        </div>
    );
}