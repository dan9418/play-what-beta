import * as React from "react";
import { InputPanel } from "../InputPanel/InputPanel";
import { Viewer } from "../MusicViewer/MusicViewer";
import "./ViewerManager.css"
import { ViewerManagerProps, DEFAULT_VIEWER_MANAGER_PROPS, InputDefinition, ALL_DEGREES, ALL_ACCIDENTALS, CONCEPT_DEFINITIONS, VIEWER_DEFINITIONS, INTERVAL_OPTIONS } from "../Common/AppConfig";
import { BoxSelector } from "../InputPanel/BoxSelector/BoxSelector";
import { NumericSelector } from "../InputPanel/NumericSelector/NumericSelector";
import { DropdownSelector } from "../InputPanel/DropdownSelector/DropdownSelector";

export class ViewerManager extends React.Component<ViewerManagerProps | any, ViewerManagerProps> {

    constructor(props) {
        super(props);

        this.state = Object.assign({}, DEFAULT_VIEWER_MANAGER_PROPS, this.props);
    }

    setValue = (property: string, value: any) => {
        let update = {};
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
