import * as React from "react";
import { InputPanel } from "../InputPanel/InputPanel";
import { Viewer } from "../MusicViewer/MusicViewer";
import "./ViewerManager.css"
import { ViewerManagerProps, DEFAULT_VIEWER_MANAGER_PROPS, InputDefinition, ALL_DEGREES, ALL_ACCIDENTALS, CONCEPT_DEFINITIONS, VIEWER_DEFINITIONS, INTERVAL_OPTIONS } from "../../Common/AppConfig";
import { BoxSelector } from "../../InputComponents/BoxSelector/BoxSelector";
import { NumericSelector } from "../../InputComponents/NumericSelector/NumericSelector";
import { DropdownSelector } from "../../InputComponents/DropdownSelector/DropdownSelector";

export class ViewerManager extends React.Component<ViewerManagerProps | any, ViewerManagerProps> {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, DEFAULT_VIEWER_MANAGER_PROPS, this.props);
    }

    setValue = (property: string, value: any) => {
        let update = {};
        if (property === 'conceptDefinition') {
            update['interalOptions'] = value.presets[0].config;
            update['intervals'] = value.presets[0].config.intervals;
        }
        if (property === 'viewerDefinition') {
            update['viewerConfig'] = value.presets[0].config;
        }
        update[property] = value;
        this.setState(update);
    }


    /*
    {
        propertyId: 'inversion',
        label: 'Chord Inversion',
        component: BoxSelector,
        props: {
            data: PRESET_CHORD_INVERSIONS,
            displayProp: 'rotation'
        }
    },
    {
        propertyId: 'melodicInversion',
        label: 'Melodic Inversion',
        component: SwitchSelector,
        props: {}
    }
    */

    render = () => {

        const INPUT_PROPS = {
            rows: [
                {
                    label: 'Key',
                    expandable: false,
                    inputs: [
                        {
                            propertyId: 'degree',
                            label: 'Degree',
                            component: BoxSelector,
                            vertical: true,
                            props: {
                                data: ALL_DEGREES
                            }
                        },
                        {
                            propertyId: 'accidental',
                            label: 'Accidental',
                            component: BoxSelector,
                            vertical: true,
                            props: {
                                data: ALL_ACCIDENTALS.filter((a) => { return Math.abs(a.offset) <= 1 })
                            }
                        },
                        {
                            propertyId: 'octave',
                            label: 'Octave',
                            component: NumericSelector,
                            vertical: true,
                            props: {}
                        }
                    ] as InputDefinition[]
                },
                {
                    label: 'Concept',
                    expandable: true,
                    subs: INTERVAL_OPTIONS,
                    inputs: [
                        {
                            propertyId: 'conceptDefinition',
                            label: 'Type',
                            component: DropdownSelector,
                            vertical: true,
                            props: {
                                data: CONCEPT_DEFINITIONS
                            }
                        },
                        {
                            propertyId: 'conceptConfig',
                            label: 'Preset',
                            component: DropdownSelector,
                            vertical: true,
                            props: {
                                data: this.state.conceptDefinition.presets
                            }
                        },
                    ] as InputDefinition[]
                },
                {
                    label: 'Viewer',
                    expandable: true,
                    subs: INTERVAL_OPTIONS,
                    inputs: [
                        {
                            propertyId: 'viewerDefinition',
                            label: 'Type',
                            component: DropdownSelector,
                            vertical: true,
                            props: {
                                data: VIEWER_DEFINITIONS
                            }
                        },
                        {
                            propertyId: 'viewerConfig',
                            label: 'Preset',
                            component: DropdownSelector,
                            vertical: true,
                            props: {
                                data: this.state.viewerDefinition.presets
                            }
                        },
                    ] as InputDefinition[]
                }
            ]
        }

        return (
            <div className='viewer-manager'>
                <div className='input-panel-container'>
                    <InputPanel
                        {...this.state}
                        rows={INPUT_PROPS.rows}
                        setValue={this.setValue}
                    />
                </div>
                <div className='viewer-container'>
                    <Viewer
                        degree={this.state.degree}
                        accidental={this.state.accidental}
                        octave={this.state.octave}
                        intervals={this.state.intervals}
                        intervalOptions={this.state.intervalOptions}
                        viewerComponent={this.state.viewerDefinition.component}
                        viewerConfig={this.state.viewerConfig}
                    />
                </div>
            </div>
        );
    };
}
