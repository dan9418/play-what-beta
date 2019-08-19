import React = require("react");
import "./InputPanel.css";
import { ViewerManagerProps, ALL_DEGREES, ALL_ACCIDENTALS, VIEWER_DEFINITIONS, CONCEPT_DEFINITIONS, InputDefinition } from "../Common/AppConfig";
import { BoxSelector } from "./BoxSelector/BoxSelector";
import { NumericSelector } from "./NumericSelector/NumericSelector";
import { DropdownSelector } from "./DropdownSelector/DropdownSelector";
import { InputCell } from "./InputCell/InputCell";
import { InputRow } from "./InputRow/InputRow";

export interface InputPanelProps extends ViewerManagerProps {
    setValue: (property: string, value: any) => void,
}

export class InputPanel extends React.Component<InputPanelProps, null> {

    constructor(props) {
        super(props);
    }

    setNestedValue = (parentProperty: string, childProperty: string, value: any) => {
        let update = { ...this.props[parentProperty] }
        update[childProperty] = value;
        this.props.setValue(parentProperty, update)
    }

    getInputCells = (parentProperty: string, inputs: InputDefinition[]) => {
        let inputCells = [];
        for (let i = 0; i < inputs.length; i++) {
            let input = inputs[i];
            let InputComponent = input.component;
            inputCells.push(
                <InputCell key={input.id} name={input.name} vertical={input.vertical} bold={input.bold}>
                    <InputComponent
                        {...this.props}
                        {...input.props}
                        value={this.props[parentProperty][input.id]}
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
                <InputRow subrowInputs={this.getInputCells('conceptOptions', this.props.conceptType.options)}>
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
                <InputRow subrowInputs={this.getInputCells('viewerProps', this.props.viewerType.options)}>
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