import * as React from "react";
import "./SummaryView.css";
import { ALL_DEGREES, Note } from "../../Theory/TheoryDefinitions";
import { TheoryEngine } from "../../Theory/TheoryEngine";
import { NoteSummary } from "./NoteSummary";

type NoteSummaryProps = {
    notes: Note[];
    config: NoteSummaryConfig
}

type NoteSummaryConfig = {
    showInactive: boolean;
}

export class NoteSummarySet extends React.Component<NoteSummaryProps, NoteSummaryConfig> {

    constructor(props) {
        super(props);
        this.state = this.props.config;
    }

    getNoteDisplays() {
        let noteDisplays = [];
        let startingPosition = (this.props.notes.length) ? ALL_DEGREES[this.props.notes[0].key.degree.value - 1].index : 0;
        for (let absolutePosition = startingPosition; absolutePosition < startingPosition + 12; absolutePosition++) {
            // Find or create note
            let note = this.props.notes.find((n) => { return n.pitchClass === (absolutePosition % 12) }) || null;
            if (note === null && this.state.showInactive)
                note = TheoryEngine.getNonfunctionalNote(absolutePosition);
            // Add note
            if (note !== null)
                noteDisplays.push(
                    <NoteSummary
                        key={`note-display-${absolutePosition}`}
                        note={note}
                        {...this.props}
                    />
                );
        }
        return noteDisplays;
    }

    updateParameter = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    render = () => {
        return <>
            <div className="summary">
                {this.getNoteDisplays()}
            </div>
        </>;
    };
}