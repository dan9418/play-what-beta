import * as React from "react";
import { InputPanel } from "../InputPanel/InputPanel";
import "./ViewerManager.css"
import { ViewerManagerProps, DEFAULT_VIEWER_MANAGER_PROPS, KeyCenter } from "../Common/AppConfig";
import { TheoryEngine } from "../Common/TheoryEngine";

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

    getKeyCenter = (): KeyCenter => {
        return {
            degree: this.state.degree,
            accidental: this.state.accidental,
            octave: this.state.octave
        }
    }

    getNotes = () => {
        return TheoryEngine.parseIntervals(this.getKeyCenter(), this.state.conceptIntervals, this.state.conceptOptions);
    }

    render = () => {
        let Viewer = this.state.viewerType.component;

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
                        notes={this.getNotes()}
                        config={this.state.viewerProps}
                    />
                </div>
            </div>
        );
    };
}