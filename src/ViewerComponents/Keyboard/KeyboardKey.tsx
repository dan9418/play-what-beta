import React = require("react");
import { KeyboardKeyType, Note, KeyboardConfig } from "../../Common/AppConfig";
import { TheoryEngine } from "../../Common/TheoryEngine";

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

        return (
            <div className={`keyboard-key-container keyboard-key-container-${keyColor}`}>
                <div className={classes.join(' ')}>
                    <div className="keyboard-key-label">{TheoryEngine.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
                </div>
            </div>
        );
    };
}