import { ViewerManagerProps, ALL_DEGREES, ALL_ACCIDENTALS, VIEWER_DEFINITIONS, CONCEPT_DEFINITIONS, INTERVAL_OPTIONS, PRESET_CHORD_INVERSIONS } from "../../Common/AppConfig";
import React = require("react");
import "./InputPanel.css";
import { CharButton } from "../../InputComponents/CharButton/CharButton";
import { BoxSelector } from "../../InputComponents/BoxSelector/BoxSelector";
import { NumericSelector } from "../../InputComponents/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputComponents/DropdownSelector/DropdownSelector";

export class InputCell extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return (
            <div className={this.props.vertical ? 'config-panel-input-y' : 'config-panel-input-x'}>
                <div className='config-panel-input-label'>{this.props.name}</div>
                <div className='config-panel-input-contents'>
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export class InputRow extends React.Component<any, any> {

    constructor(props) {
        super(props);

        this.state = {
            expanded: false
        }
    }

    render = () => {
        return (
            <div className='input-row'>
                <div className='input-row-main'>
                    {this.props.children}
                    {this.props.options && this.props.options.length &&
                        <CharButton
                            className='input-row-toggle'
                            active={this.state.expanded}
                            character={this.state.expanded ? '-' : '+'}
                            action={() => { this.setState((oldState) => { return { expanded: !oldState.expanded } }) }}
                        />
                    }
                </div>
                {this.state.expanded &&
                    <div className='input-subrow'>
                        {this.props.options && this.props.options.length > 0 && this.props.options}
                    </div>}
            </div>
        );
    }
}

export interface InputPanelProps extends ViewerManagerProps {
    setValue: (property: string, value: any) => void,
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);
    }

    setNestedValue = (parentProperty: string, childProperty: string, value: any) => {
        let update = { ...this.props[parentProperty] }
        update[childProperty] = value;
        this.props.setValue(parentProperty, update)
    }

    getInputCells = (inputs: any[], parentProperty: string) => {
        let inputCells = [];
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let InputComponent = input.component;
            inputCells.push(
                <InputCell key={input.id} name={input.name}>
                    <InputComponent
                        value={this.props[parentProperty][input.id]}
                        vertical={input.vertical}
                        {...this.props}
                        {...input.props}
                        setValue={(value) => this.setNestedValue(parentProperty, input.id, value)}
                    />
                </InputCell>
            );
        }
        return inputCells;
    }

    /* Render */

    render = () => {
        return (
            <div className='input-panel'>
                <div className='input-panel-row-label'>
                    Key
                </div>
                <InputRow>
                    <InputCell name='Degree' vertical={true}>
                        <BoxSelector
                            value={this.props.degree}
                            setValue={(value) => this.props.setValue('degree', value)}
                            data={ALL_DEGREES}
                        />
                    </InputCell>
                    <InputCell name='Accidental' vertical={true}>
                        <BoxSelector
                            value={this.props.accidental}
                            setValue={(value) => this.props.setValue('accidental', value)}
                            data={ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })}
                        />
                    </InputCell>
                    <InputCell name='Octave' vertical={true}>
                        <NumericSelector
                            value={this.props.octave}
                            setValue={(value) => this.props.setValue('octave', value)}
                        />
                    </InputCell>
                </InputRow >

                <div className='input-panel-row-label'>
                    Concept
                </div>
                <InputRow options={
                    this.getInputCells(
                        this.props.conceptType.options,
                        'conceptOptions'
                    )
                }>
                    <InputCell name='Type' vertical={true}>
                        <DropdownSelector
                            value={this.props.conceptType}
                            setValue={(value) => this.props.setValue('conceptType', value)}
                            data={CONCEPT_DEFINITIONS}
                        />
                    </InputCell>
                    <InputCell name='Preset' vertical={true}>
                        <DropdownSelector
                            value={null}
                            setValue={(value) => this.props.setValue('conceptIntervals', value.config.intervals)}
                            data={this.props.conceptType.presets}
                        />
                    </InputCell>
                </InputRow>

                <div className='input-panel-row-label'>
                    Viewers
                </div>
                <InputRow options={
                    this.getInputCells(
                        this.props.viewerType.options,
                        'viewerProps')
                }>
                    <InputCell name='Type' vertical={true}>
                        <DropdownSelector
                            value={this.props.viewerType}
                            setValue={(value) => this.props.setValue('viewerType', value)}
                            data={VIEWER_DEFINITIONS}
                        />
                    </InputCell>
                    <InputCell name='Preset' vertical={true}>
                        <DropdownSelector
                            value={null}
                            setValue={(value) => this.props.setValue('viewerProps', value)}
                            data={this.props.viewerType.presets}
                        />
                    </InputCell>
                </InputRow>

            </div >

        );
    };
}