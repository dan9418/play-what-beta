import React = require("react");
import { KeyboardKeyType, Note, KeyboardConfig } from "../../AppConfig";
import { TheoryEngine } from "../../Common/TheoryEngine";
import { TheoryEngine2 } from "../../Common/TheoryEngine2";

type KeyboardKeyProps = {
    type: KeyboardKeyType;
    note: Note;
    config: KeyboardConfig;
}

export class KeyboardKey extends React.Component<KeyboardKeyProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let keyColor = (this.props.type === KeyboardKeyType.White) ? 'white' : 'black';
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : keyColor;
        let classes = ['keyboard-key', colorClass];

        return <div className={`keyboard-key-container keyboard-key-container-${keyColor}`}>
            <div
                className={classes.join(' ')}
                onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
            >
                <div className="keyboard-key-label">{TheoryEngine2.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
            </div>
        </div>;
    };
}