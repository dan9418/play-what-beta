import * as React from "react";
import { DEGREE, Degree } from "../Common/Theory/Key/DegreeConfig";
import { ACCIDENTAL, Accidental } from "../Common/Theory/Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS } from "../Common/Theory/Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS } from "./ViewerConfig";
import { ViewerInputPanel } from "../InputPanel/ViewerInputPanel/ViewerInputPanel";
import { ViewerDriver } from "./ViewerDriver";
import { Interval } from "../Common/Theory/Concepts/IntervalConfig";

export type ViewerManagerState = {
    // Key
    degree: Degree,
    accidental: Accidental,
    octave: number
    // Concept
    conceptIntervals: Interval[],
    conceptConfig: any,
    // Viewer
    viewerComponent: any,
    viewerConfig: any,
    viewerConfigComponent: any
}

export class ViewerManager extends React.Component<any, ViewerManagerState> {

    constructor(props) {
        super(props);

        const CONCEPT_INDEX = 1;
        const VIEWER_INDEX = 2;
 
        // Constants only used here for convenient defaults
        // They should be owned and managed by input panel
        // This component should only contain the currently selected values
        this.state = {
            // Key
            degree: DEGREE.C,
            accidental: ACCIDENTAL.natural,
            octave: 4,
            // Concept
            conceptIntervals: CONCEPT_DEFINITIONS[CONCEPT_INDEX].presets[0].config.intervals,
            conceptConfig: {},
            // Viewer
            viewerComponent: VIEWER_DEFINITIONS[VIEWER_INDEX].component,
            viewerConfig: VIEWER_DEFINITIONS[VIEWER_INDEX].presets[0].config,
            viewerConfigComponent: VIEWER_DEFINITIONS[VIEWER_INDEX].configComponent
        }
    }

    setValue = (property: string, value: any) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    render = () => {
        return (
            <>
                <ViewerInputPanel
                    keyProps={{
                        degree: this.state.degree,
                        accidental: this.state.accidental,
                        octave: this.state.octave
                    }}
                    conceptInputProps={{
                        intervals: this.state.conceptIntervals,
                        config: this.state.conceptConfig,
                    }}
                    viewerInputProps={{
                        config: this.state.viewerConfig,
                        configComponent: this.state.viewerConfigComponent
                    }}
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
                        component: this.state.viewerComponent,
                        config: this.state.viewerConfig
                    }}
                />
            </>
        );
    };
}
