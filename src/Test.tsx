import React = require("react");
import { Fretboard } from "./Components/Fretboard/Fretboard";
import { Keyboard } from "./Components/Keyboard/Keyboard";
import ReactDOM = require("react-dom");
import "./Common/TheoryStyles.css"
import { DEGREE, ACCIDENTAL, NOTE_LABEL, CHORDS } from "./Common/TheoryConstants";

export class Test extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="sample-container">

                <Fretboard
                    keyCenter={{
                        degree: DEGREE.C,
                        accidental: ACCIDENTAL.Natural,
                        octave: 4
                    }}
                    concept={{
                        intervals: CHORDS.maj.intervals,
                        intervalOptions: {}
                    }}
                    noteLabel={NOTE_LABEL.Interval}
                    showDots={true}
                    filterOctave={true}
                    fretLow={0}
                    fretHigh={12}
                    strings={[
                        { openPosition: 16 },   // e
                        { openPosition: 11 },   // B
                        { openPosition: 7 },    // G
                        { openPosition: 2 },    // D
                        { openPosition: -3 },   // A
                        { openPosition: -8 }    // E
                    ]}
                />

                <Fretboard/>

                <Keyboard
                    keyCenter={{
                        degree: DEGREE.C,
                        accidental: ACCIDENTAL.Natural,
                        octave: 4
                    }}
                    concept={{
                        intervals: CHORDS.maj.intervals,
                        intervalOptions: {}
                    }}
                    noteLabel={NOTE_LABEL.Interval}
                    filterOctave={true}
                    keyLow={0}
                    keyHigh={24}
                />

                <Keyboard/>
            </div>
        )
    }
}

ReactDOM.render(<Test />, document.querySelector("#app"));