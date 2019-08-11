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
import { ViewerManagerState } from "../../Viewers/ViewerManager";

export interface ViewerInputPanelProps extends ViewerManagerState {
    setValue: (property: string, value: any) => void
}

export class ViewerInputPanel extends React.Component<ViewerInputPanelProps, null> {

    constructor(props) {
        super(props);
    }

    setNestedValue = (object: any, parentProperty: string, property: string, value: any) => {
        let mergedConfig = { ...object };
        mergedConfig[property] = value;
        this.props.setValue(parentProperty, mergedConfig);
    }

    /* Render */

    render = () => {
        let ViewerConfigPanel = this.props.viewerDefinition.configComponent;

        return (
            <div className='viewer-input-panel'>
                <InputSubrow>
                    <InputGroup label='Key'>
                        <BoxSelector
                            data={ALL_DEGREES}
                            value={this.props.degree}
                            setValue={(value) => {
                                this.props.setValue('degree', value);
                            }}
                        />
                        <BoxSelector
                            data={ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })}
                            value={this.props.accidental}
                            setValue={(value) => {
                                this.props.setValue('accidental', value);
                            }}
                        />
                    </InputGroup>
                    <InputGroup label='Octave'>
                        <NumericSelector
                            value={this.props.octave}
                            setValue={(value) => {
                                this.props.setValue('octave', value);
                            }}
                        />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <IntervalSelector
                        propertyId='conceptIntervals'
                        value={this.props.conceptIntervals as any}
                        setValue={this.props.setValue}
                        keyDef={{
                            degree: this.props.degree,
                            accidental: this.props.accidental,
                            octave: this.props.octave
                        }}
                    />}
                >
                    <InputGroup label='Concept'>
                        <DropdownSelector
                            data={CONCEPT_DEFINITIONS}
                            value={this.props.conceptDefinition}
                            setValue={(value) => {
                                this.props.setValue('conceptDefinition', value);
                            }}
                        />
                        <DropdownSelector
                            data={this.props.conceptDefinition.presets}
                            value={this.props.conceptDefinition}//
                            setValue={(value) => {
                                this.props.setValue('conceptIntervals', value.config.intervals);
                            }}
                        />
                    </InputGroup>
                </InputSubrow>
                <InputSubrow details={
                    <ViewerConfigPanel
                        viewerConfig={this.props.viewerConfig}
                        setValue={(property, value) => {
                            this.setNestedValue(this.props.viewerConfig, 'viewerConfig', property, value);
                        }}
                    />
                }>
                    <InputGroup label='Viewer'>
                        <DropdownSelector
                            data={VIEWER_DEFINITIONS}
                            value={this.props.viewerDefinition}
                            setValue={(value) => {
                                this.props.setValue('viewerDefinition', value);
                            }}
                        />
                        <DropdownSelector
                            data={this.props.viewerDefinition.presets}
                            value={this.props.viewerConfig}//
                            setValue={(value) => {
                                this.props.setValue('viewerConfig', value.config);
                            }}
                        />
                    </InputGroup>
                </InputSubrow>
            </div>);
    };
}