import * as React from "react";
import "./InputPanel.css";
import { DropdownSelector } from "../Selectors/DropdownSelector/DropdownSelector";
import { NumericSelector } from "../Selectors/NumericSelector/NumericSelector";
import { ALL_DEGREES } from "../../Key/DegreeConfig";
import { ALL_ACCIDENTALS } from "../../Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS } from "../../Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS } from "../../Viewers/ViewerConfig";
import { BoxSelector } from "../Selectors/BoxSelector/BoxSelector";
import { ConfigPanel } from "../ConfigPanel/ConfigPanel";
import { CharButton } from "../Selectors/CharButton/CharButton";
import { ViewerProps } from "../../Viewers/Viewer/Viewer";

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
*/

export interface InputPanelProps extends ViewerProps {
    setValue: (property: string, value: any) => void
}

export class InputPanel extends React.Component<InputPanelProps, any> {

    constructor(props) {
        super(props);

        this.state = {
            conceptOpen: false,
            viewerOpen: false
        }
    }

    setNestedValue = (object: any, parentProperty: string, property: string, value: any) => {
        let mergedConfig = { ...object };
        mergedConfig[property] = value;
        this.props.setValue(parentProperty, mergedConfig);
    }

    /* Render */

    render = () => {
        return (
            <div className='input-panel'>

                <div className='input-panel-col-label col-2'>
                    Degree
                </div>
                <div className='input-panel-col-label col-3'>
                    Accidental
                </div>
                <div className='input-panel-col-label col-4'>
                    Octave
                </div>

                <div className='input-panel-row-label'>
                    Key
                </div>

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

                <div className='input-panel-col-label col-2'>
                    Type
                </div>
                <div className='input-panel-col-label col-3'>
                    Presets
                </div>
                <div className='input-panel-col-label col-4'>
                </div>

                <div className='input-panel-row-label'>
                    Concept
                </div>

                <DropdownSelector
                    data={CONCEPT_DEFINITIONS}
                    value={this.props.conceptDefinition}
                    setValue={(value) => {
                        this.props.setValue('conceptDefinition', value);
                    }}
                />

                <DropdownSelector
                    data={this.props.conceptDefinition.presets}
                    value={this.props.conceptDefinition}
                    setValue={(value) => {
                        this.props.setValue('conceptIntervals', value.config.intervals);
                    }}
                />

                <CharButton
                    className='input-row-toggle'
                    active={this.state.conceptOpen}
                    character={this.state.conceptOpen ? '-' : '+'}
                    action={() => { this.setState((oldState) => { return { conceptOpen: !oldState.conceptOpen } }) }}
                />

                {this.state.conceptOpen &&
                    <div className='input-row-config-panel'>
                        <ConfigPanel
                            options={this.props.conceptDefinition.options}
                            config={this.props.conceptConfig}
                            setValue={(property, value) => {
                                this.setNestedValue(this.props.conceptConfig, 'conceptConfig', property, value);
                            }}
                            {...this.props}
                        />
                    </div>}

                <div className='input-panel-col-label col-2'>
                    Type
                </div>
                <div className='input-panel-col-label col-3'>
                    Presets
                </div>
                <div className='input-panel-col-label col-4'>
                </div>

                <div className='input-panel-row-label'>
                    Viewer
                </div>

                <DropdownSelector
                    data={VIEWER_DEFINITIONS}
                    value={this.props.viewerDefinition}
                    setValue={(value) => {
                        this.props.setValue('viewerDefinition', value);
                    }}
                />

                <DropdownSelector
                    data={this.props.viewerDefinition.presets}
                    value={this.props.viewerConfig}
                    setValue={(value) => {
                        this.props.setValue('viewerConfig', value.config);
                    }}
                />


                <CharButton
                    className='input-row-toggle'
                    active={this.state.viewerOpen}
                    character={this.state.viewerOpen ? '-' : '+'}
                    action={() => { this.setState((oldState) => { return { viewerOpen: !oldState.viewerOpen } }) }}
                />

                {this.state.viewerOpen &&
                    <div className='input-row-config-panel'>
                        <ConfigPanel
                            options={this.props.viewerDefinition.options}
                            config={this.props.viewerConfig}
                            setValue={(property, value) => {
                                this.setNestedValue(this.props.viewerConfig, 'viewerConfig', property, value);
                            }}
                            {...this.props}
                        />
                    </div>}

            </div >);
    };
}