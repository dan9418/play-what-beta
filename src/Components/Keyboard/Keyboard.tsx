import * as React from "react";
import { useState, useLayoutEffect, useRef } from "react"
import "./Keyboard.css";
import { KeyboardKey, KeyboardKeyType } from "./KeyboardKey";
import { TheoryEngine } from "../../Common/TheoryEngine";
import "./Keyboard.css";
import { ViewerProps } from "../withNotes";
import { NOTE_LABEL } from "../../Common/TheoryConstants";
import { Utils } from "../../Common/Utils";

export interface KeyboardProps extends ViewerProps {
    filterOctave?: boolean;
    keyLabel?: NOTE_LABEL;
    keyLow?: number;
    keyHigh?: number;
}

export const DEFAULT_KEYBOARD_PROPS: KeyboardProps = {
    notes: [],
    keyLabel: NOTE_LABEL.Name,
    filterOctave: true,
    keyLow: 0,
    keyHigh: 24
};

const BLACK_KEY_INDICES: number[] = [0, 2, 4, 5, 7, 9, 11];

function getKeyboardKeys(config: KeyboardProps, scale: number) {
    let keys = [];
    let numWhiteKeys = (config.keyHigh - config.keyLow + 1) * 7/12 + 1;
    for (let i = config.keyLow; i <= config.keyHigh; i++) {
        let type = BLACK_KEY_INDICES.includes(Utils.modulo(i, 12)) ? KeyboardKeyType.White : KeyboardKeyType.Black;
        keys.push(
            <KeyboardKey
                key={i}
                scale={scale / numWhiteKeys}
                type={type}
                note={TheoryEngine.getNote(config.notes, i, config.filterOctave)}
                keyLabel={config.keyLabel}
            />
        );
    }
    return keys;
}

export class Keyboard extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = { height: 0, width: 0 };
        (this as any).myRef = React.createRef();
    }

    componentDidMount() {
        window.addEventListener('resize', this.resetDimensions);
        this.resetDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.resetDimensions);
    }

    resetDimensions = () => {
        this.setState({ width: (this as any).myRef.current.clientWidth, height: (this as any).myRef.current.clientHeight });
    }

    render() {
        let config = Object.assign({}, DEFAULT_KEYBOARD_PROPS, this.props);
        return (
            <div className='keyboard' ref={(this as any).myRef}>
                {getKeyboardKeys(config, this.state.width)}
            </div>
        );
    }
}