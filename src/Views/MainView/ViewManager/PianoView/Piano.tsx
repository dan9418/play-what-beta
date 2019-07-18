import * as React from "react";
import "./PianoView.css";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { PianoKeyType } from "./PianoCommon";
import { PianoKey } from "./PianoKey";

interface IPianoKey {
    absolutePosition: number;
    type: PianoKeyType;
}

type PianoProps = {
    notes: Note[];
    config: any;
}

export class Piano extends React.Component<PianoProps> {
    static blackKeyIndices = [0, 2, 4, 5, 7, 9, 11] as any;
    keys: IPianoKey[];

    constructor(props) {
        super(props);
        this.keys = [];

        for (let i = 0; i < 25; i++) {
            let type = Piano.blackKeyIndices.includes(i % 12) ? PianoKeyType.White : PianoKeyType.Black;
            this.keys.push({ absolutePosition: i, type: type });
        }
    }

    getNote = (absolutePosition): Note => {
        let note = this.props.notes.find((note) => {
            return note.relativePosition === (absolutePosition % 12);
        }) || null;
        if (note === null)
            note = TheoryEngine.getNonfunctionalNote(absolutePosition);
        return note;
    }

    getPianoKeys = () => {
        return this.keys.map((key, index) => {
            return <PianoKey
                key={index}
                type={key.type}
                note={this.getNote(index)}
                config={this.props.config}
            />;
        });
    }

    render = () => {
        return <div className='piano'>{this.getPianoKeys()}</div>;
    }
}