import React = require("react");
import { Fretboard } from "./Components/Fretboard/Fretboard";
import { TheoryEngine } from "./Common/TheoryEngine";
import { Concepts, DEGREE, ACCIDENTAL } from "./Common/Theory.config";
import { Keyboard } from "./Components/Keyboard/Keyboard";
import ReactDOM = require("react-dom");
import "./Common/TheoryStyles.css"

export class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">

                <Fretboard
                    notes={
                        TheoryEngine.parseIntervals(
                            {
                                degree: DEGREE.C,
                                accidental: ACCIDENTAL.Natural,
                                octave: 4
                            },
                            {
                                intervals: Concepts.Chords.maj.intervals,
                                intervalOptions: {}
                            }
                        )}
                    config={{
                        noteLabel: {
                            id: 'name',
                            name: 'Name'
                        },
                        showDots: true,
                        filterOctave: true,
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

                <Keyboard
                    keyCenter={{
                        degree: DEGREE.C,
                        accidental: ACCIDENTAL.Natural,
                        octave: 4
                    }}
                    concept={{
                        intervals: Concepts.Chords.maj.intervals,
                        intervalOptions: {}
                    }}
                    noteLabel={{
                        id: 'interval',
                        name: 'Interval'
                    }}
                    filterOctave={true}
                    keyLow={0}
                    keyHigh={24}
                />
            </div>
        )
    }
}

ReactDOM.render(<Test />, document.querySelector("#app"));