import { ViewDriverProps } from "../ViewDriver/ViewDriver";
import React = require("react");
import { PresetOption, CONCEPT_TYPES, VIEWER_TYPES } from "./InputPanel.config";
import { InputCell } from "./InputCell/InputCell";
import { InputRow } from "./InputRow/InputRow";
import { ButtonListInput } from "../Inputs/ButtonListInput/ButtonListInput";
import { DEGREES, ACCIDENTALS } from "../Common/Theory.config";
import { NumericInput } from "../Inputs/NumericInput/NumericInput";
import { DropdownInput } from "../Inputs/DropdownInput/DropdownInput";

export interface InputPanelProps extends ViewDriverProps {
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

    getPresetOptionCells = (parentProperty: string, options: PresetOption[]) => {
        let inputCells = [];
        for (let i = 0; i < options.length; i++) {
            let option = options[i];
            let InputComponent = option.component;
            inputCells.push(
                <InputCell key={option.id} label={option.name} styles={option.styles}>
                    <InputComponent
                        {...this.props}
                        {...option.props}
                        value={this.props[parentProperty][option.id]}
                        setValue={(value) => this.setNestedValue(parentProperty, option.id, value)}
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
                    <InputCell label='Degree' styles={{ vertical: true }}>
                        <ButtonListInput
                            value={this.props.degree}
                            setValue={(value) => this.props.setValue('degree', value)}
                            data={DEGREES}
                        />
                    </InputCell>
                    <InputCell label='Accidental' styles={{ vertical: true }}>
                        <ButtonListInput
                            value={this.props.accidental}
                            setValue={(value) => this.props.setValue('accidental', value)}
                            data={ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })}
                        />
                    </InputCell>
                    <InputCell label='Octave' styles={{ vertical: true }}>
                        <NumericInput
                            value={this.props.octave}
                            setValue={(value) => this.props.setValue('octave', value)}
                            min={0}
                            max={10}
                        />
                    </InputCell>
                </InputRow >

                <div className='input-panel-row-label'>
                    Concept
                </div>
                <InputRow subrowInputs={this.getPresetOptionCells('conceptConfig', this.props.conceptType.optionInputs)}>
                    <InputCell label='Type' styles={{ vertical: true }}>
                        <DropdownInput
                            value={this.props.conceptType}
                            setValue={(value) => this.props.setValue('conceptType', value)}
                            data={CONCEPT_TYPES}
                        />
                    </InputCell>
                    <InputCell label='Preset' styles={{ vertical: true }}>
                        <DropdownInput
                            value={null}
                            setValue={(value) => this.props.setValue('conceptIntervals', value.config.intervals)}
                            data={this.props.conceptType.presets}
                        />
                    </InputCell>
                </InputRow>

                <div className='input-panel-row-label'>
                    Viewers
                </div>
                <InputRow subrowInputs={this.getPresetOptionCells('viewerConfig', this.props.viewerType.optionInputs)}>
                    <InputCell label='Type' styles={{ vertical: true }}>
                        <DropdownInput
                            value={this.props.viewerType}
                            setValue={(value) => this.props.setValue('viewerType', value)}
                            data={VIEWER_TYPES}
                        />
                    </InputCell>
                    <InputCell label='Preset' styles={{ vertical: true }}>
                        <DropdownInput
                            value={null}
                            setValue={(value) => this.props.setValue('viewerConfig', value.config)}
                            data={this.props.viewerType.presets}
                        />
                    </InputCell>
                </InputRow>
            </div >
        );
    };
}