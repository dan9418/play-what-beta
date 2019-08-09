import * as React from "react";
import "./SummaryView.css";
import { TheoryEngine } from "../../Common/Theory/TheoryEngine";
import { NoteSummary } from "./NoteSummary";
import { NoteSummaryConfig } from "./NoteSummaryConfig";
import { Note } from "../../Common/Theory/TheoryConfig";
import { ALL_DEGREES } from "../../Common/Theory/Key/DegreeConfig";

type NoteSummaryProps = {
    notes: Note[];
    config: NoteSummaryConfig
}

export class NoteSummarySet extends React.Component<NoteSummaryProps, null> {

    constructor(props) {
        super(props);
    }

    getNoteDisplays() {
        let noteDisplays = [];
        let startingPosition = (this.props.notes.length) ? ALL_DEGREES[this.props.notes[0].key.degree.value - 1].index + this.props.notes[0].key.accidental.offset : 0;
        for (let absolutePosition = startingPosition; absolutePosition < startingPosition + 12; absolutePosition++) {
            // Find or create note
            let note = this.props.notes.find((n) => { return n.pitchClass === (absolutePosition % 12) }) || null;
            if (note === null && this.props.config.showInactive)
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

    render = () => {
        return (
            <div className='summary'>
                {this.getNoteDisplays()}
            </div>
        );
    };
}