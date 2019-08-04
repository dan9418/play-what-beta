import * as React from "react";
import "./MasterViewer.css";
import { TheoryEngine } from "../Common/Theory/TheoryEngine";
import { Accidental, Interval, Key, ALL_DEGREES } from "../Common/Theory/TheoryDefinitions";
import { NoteSummarySet } from "../Common/Viewers/SummaryView/NoteSummarySet";
import { Guitar } from "../Common/Viewers/GuitarView/Guitar";
import { Piano } from "../Common/Viewers/PianoView/Piano";
import { DropdownSelector } from "../Common/Inputs/Selectors/DropdownSelector/DropdownSelector";

type MasterViewerProps = {
    keyDef: Key,
    octave: number,
    intervals: Interval[]
}

export class MasterViewer extends React.Component<MasterViewerProps, any> {

    constructor(props) {
        super(props);
        this.state = {

        };
    }
    /* Processing */

    getNotes = () => {
        return TheoryEngine.getNotesFromIntervals(this.props.keyDef, this.props.intervals, this.props.octave);
    }

    /* Render */

    render = () => {
        let notes = this.getNotes()
        return (
            <div className='master-viewer'>
                <div className='master-viewer-displays'>
                    <NoteSummarySet
                        notes={notes}
                        config={{
                            showInactive: true
                        }}
                    />
                    <Guitar
                        notes={notes}
                        config={{
                            guitarNoteLabel: { id: 'interval' } as any,
                            showDots: false,
                            filterOctave: false,
                            fretLow: 0,
                            fretHigh: 12,
                            strings: [
                                { openPosition: 16 },   // e
                                { openPosition: 11 },   // B
                                { openPosition: 7 },    // G
                                { openPosition: 2 },    // D
                                { openPosition: -3 },   // A
                                { openPosition: -8 }    // E   
                            ]
                        }}
                    />
                    <Piano
                        notes={notes}
                        config={{
                            noteLabel: { id: 'interval' } as any,
                            filterOctave: false,
                            keyLow: 0,
                            keyHigh: 24
                        }} />
                </div>
            </div>
        );
    };
}