import * as React from "react";
import "./SummaryView.css";
import { DiatonicDegreeDefinitions } from "../../../../Parameters/Key/DiatonicDegreeConfig";
import { TheoryEngine, Note } from "../../../../TheoryCore/TheoryEngine";
import { SwitchSelector } from "../../Selectors/SwitchSelector";
import { NoteSummary } from "./NoteSummary";
import { InputGroup } from "../../Selectors/InputGroup/InputGroup";
import { InputWrapper } from "../../Selectors/InputGroup/InputWrapper";

type NoteSummaryProps = {
    notes: Note[];
}

type NoteSummaryConfig = {
    showInactive: boolean;
}

export class NoteSummarySet extends React.Component<NoteSummaryProps, NoteSummaryConfig> {

    constructor(props) {
        super(props);
        this.state = {
            showInactive: false
        }
    }

    getNoteDisplays() {
        let noteDisplays = [];
        let startingPosition = (this.props.notes.length) ? DiatonicDegreeDefinitions[this.props.notes[0].key.diatonicDegree.degree - 1].homePostition : 0;
        for (let absolutePosition = startingPosition; absolutePosition < startingPosition + 12; absolutePosition++) {
            // Find or create note
            let note = this.props.notes.find((n) => { return n.relativePosition === (absolutePosition % 12) }) || null;
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
        return <div className="summary">
            {this.getNoteDisplays()}
            <div className='summary-config'>
                <InputGroup name='Keys'>
                    <InputWrapper name='Play'>
                        <div className="speaker-icon" onClick={() => TheoryEngine.playNotes(this.props.notes)}>🔊</div>
                    </InputWrapper>
                    <InputWrapper name='Show Inactive'>
                        <SwitchSelector parameter={{ id: 'showInactive', name: 'Show Inactive' }} updateParameter={this.updateParameter} />
                    </InputWrapper>
                </InputGroup>
            </div>
        </div>;
    };
}