import React = require("react");
import { CompleteNote, FretboardConfig } from "../../../Common/AppConfig";
import { TheoryEngine } from "../../../Common/TheoryEngine";

type FretboardFretProps = {
    fretNumber: number;
    stringNumber: number;
    note: CompleteNote;
    config: FretboardConfig;
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
                <div className={labelClasses.join(' ')}>{TheoryEngine.getNoteLabel(this.props.note, this.props.config.noteLabel.id)}</div>
            </div>
        );
    };
}