import React = require("react");
import { ViewDriver } from "./Components/ViewDriver/ViewDriver";
import { Fretboard } from "./Components/Viewers/Fretboard/Fretboard";
import { TheoryEngine } from "./Common/TheoryEngine";
import { Concepts } from "./Common/Theory.config";
import { Keyboard } from "./Components/Viewers/Keyboard/Keyboard";
import ReactDOM = require("react-dom");
import "./Common/TheoryStyles.css"

export class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">
                {/*<ViewDriver />*/}

                <Fretboard
                    notes={
                        TheoryEngine.parseIntervals(
                            {
                                degree: {
                                    id: 'C',
                                    name: 'C',
                                    value: 1,
                                    index: 0
                                },
                                accidental: {
                                    id: 'natural',
                                    name: '♮',
                                    offset: 0
                                },
                                octave: 4
                            },
                            Concepts.Chords.maj.intervals,
                            {}
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
                    notes={[]}
                    config={{
                        noteLabel: {
                            id: 'interval',
                            name: 'Interval'
                        },
                        filterOctave: true,
                        keyLow: 0,
                        keyHigh: 24
                    }}
                />
            </div>
        )
    }
}

ReactDOM.render(<Test />, document.querySelector("#app"));