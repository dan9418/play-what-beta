/*tuneString = (stringNumber, openPosition) => {
    this.setState((oldState) => {
        let newStrings = [];
        for (let i = 0; i < oldState.strings.length; i++) {
            let newString = ((i + 1) === stringNumber) ? { openPosition: openPosition } : oldState.strings[i];
            newStrings.push(newString);
        }
        return {
            strings: newStrings
        }
    });
}*/

/*getTuners = () => {
    let tuners = [];
    for (let i = 0; i < this.state.strings.length; i++) {
        tuners.push(<Tuner
            key={i}
            openPosition={this.state.strings[i].openPosition}
            tuneString={(position) => { this.tuneString(i + 1, position); }}
            removeString={() => { this.removeString(i); }}
        />);
    }
    return tuners;
}*/

/*insertString = (index) => {
    this.setState((oldState) => {
        return {
            strings: [...oldState.strings.slice(0, index), { openPosition: 0 }, ...oldState.strings.slice(index)]
        };
    });
}*/

/*removeString = (index) => {
    this.setState((oldState) => {
        return {
            strings: [...oldState.strings.slice(0, index), ...oldState.strings.slice(index + 1)]
        };
    });
}*/

import * as React from "react";
import { NumericSelector } from "../../NumericSelector/NumericSelector";
import { DropdownSelector } from "../../DropdownSelector/DropdownSelector";
import { SwitchSelector } from "../../SwitchSelector/SwitchSelector";
import { ALL_GUITAR_FRET_LABELS, GuitarConfig } from "../../../../Viewers/GuitarView/GuitarConfig";

export class GuitarConfigPanel extends React.Component<any, null> {

    constructor(props) {
        super(props);
    }

    getStringInputs = () => {
        let items = [];
        for (let i = 0; i < this.props.viewerConfig.strings.length; i++) {
            let child = this.props.viewerConfig.strings[i];
            items.push(<div key={i} className='string-row'>
                <div className='string-label'>{i + 1}</div>
                <NumericSelector
                    value={this.props.viewerConfig.strings[i].openPosition}
                    setValue={(value) => {
                        let s = this.props.viewerConfig.strings;
                        s[i].openPosition = value;
                        this.props.setValue('strings', s);
                    }} />
                <div className='string-voicings'>*</div>
            </div>);
        }
        return items;
    }

    render = () => {
        return (
            <div className='fretboard-string-selector'>
                <NumericSelector
                    value={this.props.viewerConfig.strings.length}
                    setValue={(value) => {
                        if (value > this.props.viewerConfig.strings.length)
                            this.props.setValue('strings', [...this.props.viewerConfig.strings, { openPosition: 0 }]);
                        else
                            this.props.setValue('strings', this.props.viewerConfig.strings.splice(0, value));
                    }} />
                <div className='string-config-panel'>
                    <div className='string-row'><span>#</span><span>Tuning</span><span>Voicings</span></div>
                    {this.getStringInputs()}
                </div>
            </div>
        );
    }
}