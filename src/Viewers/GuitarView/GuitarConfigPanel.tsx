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
import { InputSubrow } from "../../InputPanel/InputSubrow/InputSubrow";
import { InputGroup } from "../../InputPanel/InputGroup/InputGroup";
import { NumericSelector } from "../../InputPanel/Selectors/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputPanel/Selectors/DropdownSelector/DropdownSelector";
import { SwitchSelector } from "../../InputPanel/Selectors/SwitchSelector/SwitchSelector";
import { ALL_GUITAR_FRET_LABELS } from "./GuitarConfig";

type GuitarConfigPanelProps = {
    setValue: (value: any) => void,
    viewer: any;
}

export class GuitarConfigPanel extends React.Component<GuitarConfigPanelProps, null> {

    constructor(props) {
        super(props);
    }

    setValue = (property: string, value: any) => {
        let mergedViewer = { ...this.props.viewer };
        mergedViewer.config[property] = value;
        this.props.setValue(mergedViewer);
    }

    getStringInputs = () => {
        let items = [];
        for (let i = 0; i < this.props.viewer.config.strings.length; i++) {
            let child = this.props.viewer.config.strings[i];
            items.push(<div key={i} className='string'>(
                <NumericSelector
                    value={this.props.viewer.config.strings[i].openPosition}
                    setValue={(value) => {
                        let s = this.props.viewer.config.strings;
                        s[i].openPosition = value;
                        this.setValue('strings', s);
                    }} />)
                    </div>);
        }
        return items;
    }

    render = () => {
        return (
            <div className='guitar-config-panel'>
                <InputSubrow>
                    <InputGroup label='Fret Label'>
                        <DropdownSelector
                            data={ALL_GUITAR_FRET_LABELS}
                            value={this.props.viewer.config.fretLabel}
                            setValue={(value) => { this.setValue('fretLabel', value); }} />
                    </InputGroup>
                    <InputGroup label='Fret Range'>
                        Low (
                        <NumericSelector
                            value={this.props.viewer.config.fretLow}
                            setValue={(value) => { this.setValue('fretLow', value); }} />)
                    High (
                        <NumericSelector
                            value={this.props.viewer.config.fretHigh}
                            setValue={(value) => { this.setValue('fretHigh', value); }} />)
                    </InputGroup>
                    <InputGroup label='Filter Octave'>
                        <SwitchSelector
                            value={this.props.viewer.config.filterOctave}
                            setValue={(value) => { this.setValue('filterOctave', value); }} />
                    </InputGroup>
                    <InputGroup label='Show Dots'>
                        <SwitchSelector
                            value={this.props.viewer.config.showDots}
                            setValue={(value) => { this.setValue('showDots', value); }} />
                    </InputGroup>
                    <InputGroup label='Strings'>
                        {this.getStringInputs()}
                    </InputGroup>
                </InputSubrow>
            </div>
        );
    }
}