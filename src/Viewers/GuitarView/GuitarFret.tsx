import * as React from "react";
import "./GuitarView.css";
import "../../Theory/TheoryStyles.css";
import { Note } from "../../Theory/TheoryConfig";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { GuitarConfig } from "./GuitarConfig";
import { TheoryEngine2 } from "../../Theory/TheoryEngine2";

type GuitarFretProps = {
    fretNumber: number;
    stringNumber: number;
    note: Note;
    config: GuitarConfig;
}

export class GuitarFret extends React.Component<GuitarFretProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : '';
        let classes = ['guitar-fret', 'wood'];
        let labelClasses = [colorClass, 'guitar-fret-label']
        if (this.props.fretNumber === 0)
            classes.push('guitar-fret-open');

        return <div
            className={classes.join(' ')}
            onClick={() => { TheoryEngine.playNotes([this.props.note]); }}
        >
            <div className={labelClasses.join(' ')}>{TheoryEngine2.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
        </div>;
    };
}