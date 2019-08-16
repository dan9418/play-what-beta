import * as React from "react";
import { InputPanel } from "../InputPanel/InputPanel/InputPanel";
import { Viewer } from "../MusicViewer/MusicViewer";
import "./ViewerManager.css"
import { ViewerManagerProps, DEFAULT_VIEWER_MANAGER_PROPS } from "../ViewerComponents/ViewerConfig";

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
