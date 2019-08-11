import * as React from "react";
import "./ViewerInputPanel.css";
import { DropdownSelector } from "../Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Selectors/NumericSelector/NumericSelector";
import { ALL_DEGREES } from "../../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../../Common/Theory/Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS, ConceptDefinition } from "../../Common/Theory/Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS, ViewerDefinition } from "../../Viewers/ViewerConfig";
import { BoxSelector } from "../Selectors/BoxSelector/BoxSelector";
import { IntervalSelector } from "../Selectors/IntervalSelector/IntervalSelector";
import { InputGroup } from "../InputGroup/InputGroup";
import { InputSubrow } from "../InputSubrow/InputSubrow";
import { ViewerDriverProps, KeyProps } from "../../Viewers/ViewerDriver";
import { Interval } from "../../Common/Theory/Concepts/IntervalConfig";
import { Preset } from "../../Common/Theory/TheoryConfig";


export type ConceptInputProps = {
    intervals: Interval[],
    config: any
}

export type ViewerInputProps = {
    configComponent: any,
    config: any
}

export type ViewerInputPanelProps = {
    keyProps: KeyProps,
    conceptInputProps: ConceptInputProps,
    viewerInputProps: ViewerInputProps,
    setValue: (property: string, value: any) => void
}

export type ViewerInputPanelState = {
    conceptDefinition: ConceptDefinition,
    conceptPreset: Preset<any>,
    viewerDefinition: ViewerDefinition,
    viewerPreset: Preset<any>
}

export class ViewerInputPanel extends React.Component<ViewerInputPanelProps, any> {

    constructor(props) {
        super(props);

        this.state = {
            conceptDefinition: CONCEPT_DEFINITIONS[1],
            conceptPreset: CONCEPT_DEFINITIONS[1].presets[0],
            viewerDefinition: VIEWER_DEFINITIONS[2],
            viewerPreset: VIEWER_DEFINITIONS[2].presets[0]
        };
    }

    setNestedValue = (object: any, parentProperty: string, property: string, value: any) => {
        let mergedConfig = { ...object };
        mergedConfig[property] = value;
        this.props.setValue(parentProperty, mergedConfig);
    }

    /* Render */

    render = () => {
        let ViewerConfigPanel = this.props.viewerInputProps.configComponent;

        return (
            <div className='viewer-input-panel'>
                <InputSubrow>
                    <InputGroup label='Key'>
                        <BoxSelector
                            data={ALL_DEGREES}
                            value={this.props.keyProps.degree}
                            setValue={(value) => { this.props.setValue('degree', value); }}
                        />
                        <BoxSelector
                            data={ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })}
                            value={this.props.keyProps.accidental}
                            setValue={(value) => { this.props.setValue('accidental', value); }}
                        />
                    </InputGroup>
                    <InputGroup label='Octave'>
                        <NumericSelector
                            value={this.props.keyProps.octave}
                            setValue={(value) => { this.props.setValue('octave', value); }}
                        />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <IntervalSelector
                        propertyId='conceptIntervals'
                        value={this.props.conceptInputProps.intervals as any}
                        setValue={this.props.setValue}
                        keyDef={{
                            degree: this.props.keyProps.degree,
                            accidental: this.props.keyProps.accidental,
                            octave: this.props.keyProps.octave
                        }}
                    />}
                >
                    <InputGroup label='Concept'>
                        <DropdownSelector
                            data={CONCEPT_DEFINITIONS}
                            value={this.state.conceptDefinition}
                            setValue={(value) => { this.setState('conceptDefinition', value); }}
                        />
                        <DropdownSelector
                            data={this.state.conceptDefinition.presets}
                            value={this.state.conceptPreset}
                            setValue={(value) => { this.setState('conceptPreset', value); }}
                        />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <ViewerConfigPanel
                        viewerConfig={this.props.viewerInputProps.config}
                        setValue={(property, value) => { this.setNestedValue(this.props.viewerInputProps.config, 'viewerConfig', property, value); }}
                    />
                }>
                    <InputGroup label='Viewer'>
                        <DropdownSelector
                            data={VIEWER_DEFINITIONS}
                            value={this.state.viewerDefinition}
                            setValue={(value) => { this.setState('viewerDefinition', value); }}
                        />
                        <DropdownSelector
                            data={this.state.viewerDefinition.presets}
                            value={this.state.viewerPreset}
                            setValue={(value) => { this.setState('viewerPreset', value); }}
                        />
                    </InputGroup>
                </InputSubrow>
            </div>);
    };
}