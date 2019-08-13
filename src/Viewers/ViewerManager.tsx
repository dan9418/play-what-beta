import * as React from "react";
import { DEGREE, Degree } from "../Key/DegreeConfig";
import { ACCIDENTAL, Accidental } from "../Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS, ConceptDefinition } from "../Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS, ViewerDefinition } from "./ViewerConfig";
import { InputPanel } from "../InputPanel/InputPanel/InputPanel";
import { ViewerDriver } from "./ViewerDriver";
import { Interval } from "../Concepts/IntervalConfig";

export type ViewerManagerState = {
    // Key
    degree: Degree,
    accidental: Accidental,
    octave: number
    // Concept
    conceptDefinition: ConceptDefinition,
    conceptIntervals: Interval[],
    conceptConfig: any,
    // Viewer
    viewerDefinition: ViewerDefinition,
    viewerConfig: any,
}

export class ViewerManager extends React.Component<any, ViewerManagerState> {

    constructor(props) {
        super(props);

        const CONCEPT_INDEX = 2;
        const VIEWER_INDEX = 1;

        this.state = {
            // Key
            degree: DEGREE.C,
            accidental: ACCIDENTAL.natural,
            octave: 4,
            // Concept
            conceptDefinition: CONCEPT_DEFINITIONS[CONCEPT_INDEX],
            conceptIntervals: CONCEPT_DEFINITIONS[CONCEPT_INDEX].presets[0].config.intervals,
            conceptConfig: {},
            // Viewer
            viewerDefinition: VIEWER_DEFINITIONS[VIEWER_INDEX],
            viewerConfig: VIEWER_DEFINITIONS[VIEWER_INDEX].presets[0].config,
        }
    }

    setValue = (property: string, value: any) => {
        let update = {};
        if (property === 'viewerDefinition')
            update['viewerConfig'] = value.presets[0].config;
        update[property] = value;
        this.setState(update);
    }

    render = () => {
        return (
            <>
                <InputPanel
                    {...this.state}
                    setValue={this.setValue}
                />
                <ViewerDriver
                    keyProps={{
                        degree: this.state.degree,
                        accidental: this.state.accidental,
                        octave: this.state.octave
                    }}
                    conceptProps={{
                        intervals: this.state.conceptIntervals,
                        config: this.state.conceptConfig
                    }}
                    viewerProps={{
                        component: this.state.viewerDefinition.component,
                        config: this.state.viewerConfig
                    }}
                />
            </>
        );
    };
}
