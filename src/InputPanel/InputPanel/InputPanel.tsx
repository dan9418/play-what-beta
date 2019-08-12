import * as React from "react";
import "./InputPanel.css";
import { DropdownSelector } from "../Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Selectors/NumericSelector/NumericSelector";
import { ALL_DEGREES } from "../../Common/Theory/Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../../Common/Theory/Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS, ConceptDefinition } from "../../Common/Theory/Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS, ViewerDefinition } from "../../Viewers/ViewerConfig";
import { BoxSelector } from "../Selectors/BoxSelector/BoxSelector";
import { IntervalSelector } from "../Selectors/IntervalSelector/IntervalSelector";
import { ViewerManagerState } from "../../Viewers/ViewerManager";

/*
<IntervalSelector
    propertyId='conceptIntervals'
    value={this.props.conceptIntervals as any}
    setValue={this.props.setValue}
    keyDef={{
        degree: this.props.degree,
        accidental: this.props.accidental,
        octave: this.props.octave
    }}
/>

<ViewerConfigPanel
    viewerConfig={this.props.viewerConfig}
    setValue={(property, value) => {
        this.setNestedValue(this.props.viewerConfig, 'viewerConfig', property, value);
    }}
/>

<ViewerConfigPanel
                    viewerConfig={this.props.viewerConfig}
                    setValue={(property, value) => {
                        this.setNestedValue(this.props.viewerConfig, 'viewerConfig', property, value);
                    }}
                />

*/

export interface InputPanelProps extends ViewerManagerState {
    setValue: (property: string, value: any) => void
}

export class InputPanel extends React.Component<InputPanelProps, null> {

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
            <div className='input-panel'>
                <div className='input-row-label'></div>
                <div className='input-column-label'>Degree</div>
                <div className='input-column-label'>Accidental</div>
                <div className='input-column-label'>Octave</div>

                <div className='input-row-label key'>Key</div>
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

                <NumericSelector
                    value={this.props.octave}
                    setValue={(value) => {
                        this.props.setValue('octave', value);
                    }}
                />

                <div className='input-row-label'></div>
                <div className='input-column-label'>Type</div>
                <div className='input-column-label'>Preset</div>
                <div className='input-column-label'>Configure</div>

                <div className='input-row-label concept'>Concept</div>
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
                <div className='input-row-toggle'>...</div>

                <div className='input-row-label viewer'>Viewer</div>
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
                <div className='input-row-toggle'>...</div>
            </div >);
    };
}