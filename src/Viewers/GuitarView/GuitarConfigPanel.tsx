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
import { NumericSelector } from "../../InputPanel/Selectors/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { ALL_GUITAR_FRET_LABELS, GuitarConfig } from "./GuitarConfig";

type GuitarConfigPanelProps = {
    setValue: (property: string, value: any) => void,
    viewerConfig: GuitarConfig;
}

export class GuitarConfigPanel extends React.Component<GuitarConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    /*setValue = (property: string, value: any) => {
        let mergedConfig = { ...this.props.viewerConfig };
        mergedConfig.config[property] = value;
        this.props.setValue(mergedConfig);
    }*/

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
            <div className='guitar-config-panel'>
                <div className='config-panel-header'>Frets</div>
                <div className='config-panel-row-label'>Label</div>
                <div className='config-panel-row-contents'>
                    <DropdownSelector
                        data={ALL_GUITAR_FRET_LABELS}
                        value={this.props.viewerConfig.fretLabel}
                        setValue={(value) => { this.props.setValue('fretLabel', value); }} />
                </div>
                <div className='config-panel-row-label'>Low</div>
                <div className='config-panel-row-contents'>
                    <NumericSelector
                        value={this.props.viewerConfig.fretLow}
                        setValue={(value) => { this.props.setValue('fretLow', value); }} />
                </div>
                <div className='config-panel-row-label'>High</div>
                <div className='config-panel-row-contents'>
                    <NumericSelector
                        value={this.props.viewerConfig.fretHigh}
                        setValue={(value) => { this.props.setValue('fretHigh', value); }} />
                </div>
                <div className='config-panel-row-label'>Filter Octave</div>
                <div className='config-panel-row-contents'>
                    <SwitchSelector
                        value={this.props.viewerConfig.filterOctave}
                        setValue={(value) => { this.props.setValue('filterOctave', value); }} />
                </div>
                <div className='config-panel-row-label'>Show Dots</div>
                <div className='config-panel-row-contents'>
                    <SwitchSelector
                        value={this.props.viewerConfig.showDots}
                        setValue={(value) => { this.props.setValue('showDots', value); }} />
                </div>
                <div className='config-panel-header'>Strings</div>
                <div className='config-panel-row-label'>Count</div>
                <div className='config-panel-row-contents'>
                    <NumericSelector
                        value={this.props.viewerConfig.strings.length}
                        setValue={(value) => {
                            if (value > this.props.viewerConfig.strings.length)
                                this.props.setValue('strings', [...this.props.viewerConfig.strings, { openPosition: 0 }]);
                            else
                                this.props.setValue('strings', this.props.viewerConfig.strings.splice(0, value));
                        }} />
                </div>
                <div className='string-config-panel'>
                    <div className='string-row'><span>#</span><span>Tuning</span><span>Voicings</span></div>
                    {this.getStringInputs()}
                </div>
            </div>
        );
    }
}