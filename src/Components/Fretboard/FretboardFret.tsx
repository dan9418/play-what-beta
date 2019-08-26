import React = require("react");
import { TheoryEngine } from "../../Common/TheoryEngine";
import { CompleteNote, NoteLabel } from "../../Common/Theory.config";

interface FretboardFretProps {
    fretNumber: number;
    note: CompleteNote;
    noteLabel: NoteLabel;
}

export class FretboardFret extends React.Component<FretboardFretProps, null> {

    constructor(props) {
        super(props);
    }

    render = () => {
        let colorClass = (this.props.note.interval.id !== '') ? `degree-${this.props.note.interval.degree}` : '';
        let classes = ['fretboard-fret', 'wood'];
        let labelClasses = [colorClass, 'fretboard-fret-label']
        if (this.props.fretNumber === 0)
            classes.push('fretboard-fret-open');

        return (
            <div className={classes.join(' ')}>
                <div className={labelClasses.join(' ')}>{TheoryEngine.getNoteLabel(this.props.note, this.props.noteLabel)}</div>
            </div>
        );
    };
}