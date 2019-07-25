import * as React from "react";
import "./ViewManager.css";
import { BoxSelector } from "./Selectors/BoxSelector/BoxSelector";
import { DiatonicDegreeDefinitions } from "../../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "../../Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "../../TheoryCore/TheoryEngine";
import { InputGroup } from "./Selectors/InputGroup/InputGroup";
import { ViewerDefinitions, DEFAULT_CONCEPT_TYPE, DEFAULT_CONCEPT } from "./Viewers/CommonView";
import { MASTER_PARAMETERS } from "../../Parameters/MasterParameters";

export class ViewManager extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewer: ViewerDefinitions.data[3],
            open: true,
            key_diatonicDegree: DiatonicDegreeDefinitions[0],
            key_accidental: AccidentalDefinitions[2],
            concept_type: DEFAULT_CONCEPT_TYPE,
            concept_interval: DEFAULT_CONCEPT,
            concept_chord: DEFAULT_CONCEPT,
            concept_scale: DEFAULT_CONCEPT,
            concept_mode: DEFAULT_CONCEPT
        };
    }

    /* Viewer Management */

    insertViewer = (viewerDefinition) => {
        this.setState({
            viewer: viewerDefinition
        });
    }

    removeViewer = () => {
        this.setState({
            viewer: ViewerDefinitions.data[0]
        });
    }

    setParameter = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

    toggle = () => {
        this.setState((state) => {
            return { open: !state.open }
        });
    }

    getSymbol: any = () => {
        return (this.state.open ? '-' : '+');
    }

    /* Build Inputs */

    getParameterSelectors = () => {
        let selectors = [];
        for (let i = 0; i < MASTER_PARAMETERS.length; i++) {
            let parameter = MASTER_PARAMETERS[i];
            let children = [];
            for (let j = 0; j < parameter.children.length; j++) {
                let child = parameter.children[j];
                // TODO support multiple conditions
                if (typeof (child.conditions) === 'undefined' || this.state[child.conditions[0].property].id === child.conditions[0].value) {
                    let childId = parameter.id + '_' + child.id;
                    children.push(
                        <BoxSelector
                            key={childId}
                            updateSelection={(param) => { this.setParameter(childId, param); }}
                            param={child}
                            selectedValue={this.state[childId]}
                        />);
                }
            }
            selectors.push(
                <InputGroup key={parameter.name} name={parameter.name} icon={parameter.name.charAt(0)}>
                    {children}
                </InputGroup>
            );
        }
        return selectors;
    }

    /* Processing */

    getNotes = () => {
        let key = TheoryEngine.getKey(this.state.key_diatonicDegree, this.state.key_accidental);
        let intervals = this.state['concept_' + this.state.concept_type.id].intervals;
        return TheoryEngine.getNotesFromIntervals(key, intervals);
    }

    /* Render */

    render = () => {
        let Viewer = this.state.viewer.class;

        return (
            <div className='view-manager'>
                <div className='view-manager-header'>
                    <div className='view-manager-header-title'>{this.state.viewer.name}</div>
                    <div className='view-manager-header-corner-button' onClick={this.toggle}>{this.getSymbol()}</div>
                    <div className='view-manager-header-corner-button' onClick={this.removeViewer}>X</div>
                </div>
                <div className='view-manager-toolbar'>
                    {this.getParameterSelectors()}
                </div>
                <div className="view-manager-viewer">
                    <div className='view-manager-viewer-container'>
                        {this.state.open && <div className='view-manager-viewer'>
                            <Viewer insertViewer={this.insertViewer} notes={this.getNotes()} {...this.props} />
                        </div>}
                    </div>
                </div>
            </div>
        );
    };
}