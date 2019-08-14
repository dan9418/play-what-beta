import * as React from "react";
import { DEGREE } from "../../Key/DegreeConfig";
import { ACCIDENTAL, } from "../../Key/AccidentalConfig";
import { CONCEPT_DEFINITIONS, } from "../../Concepts/ConceptConfig";
import { VIEWER_DEFINITIONS, } from "../ViewerConfig";
import { InputPanel } from "../../InputPanel/InputPanel/InputPanel";
import { Viewer, ViewerProps } from "../Viewer/Viewer";

export class ViewerManager extends React.Component<any, ViewerProps> {

    constructor(props) {
        super(props);

        const CONCEPT_INDEX = 1;
        const VIEWER_INDEX = 1;

        this.state = {
            // Key
            degree: DEGREE.C,
            accidental: ACCIDENTAL.natural,
            octave: 4,
            // Concept
            conceptDefinition: CONCEPT_DEFINITIONS[CONCEPT_INDEX],
            conceptIntervals: CONCEPT_DEFINITIONS[CONCEPT_INDEX].presets[0].config.intervals,
            conceptConfig: CONCEPT_DEFINITIONS[CONCEPT_INDEX].defaults,
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
            <div className='viewer-manager'>
                <div className='input-panel-container'>
                    <InputPanel
                        {...this.state}
                        setValue={this.setValue}
                    />
                </div>
                <div className='viewer-container'>
                    <Viewer
                        {...this.state}
                    />
                </div>
            </div>
        );
    };
}
