import * as React from "react";
import "./ViewManager.css";
import { BoxSelector } from "./Selectors/BoxSelector/BoxSelector";
import { DiatonicDegreeDefinitions } from "../../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "../../Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "../../TheoryCore/TheoryEngine";
import { InputGroup } from "./Selectors/InputGroup/InputGroup";
import { DEFAULT_CONCEPT_TYPE, DEFAULT_CONCEPT } from "./Viewers/CommonView";
import { MASTER_PARAMETERS } from "../../Parameters/MasterParameters";
import { DropdownSelector } from "./Selectors/DropdownSelector";
import { InputWrapper } from "./Selectors/InputGroup/InputWrapper";
import { NumericSelector } from "./Selectors/NumericSelector";
import { ViewerDefinitions } from "../../Parameters/Viewers/ViewerConfig";
import { IntervalSelector } from "./Selectors/IntervalSelector";

export class ViewManager extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewer_value: ViewerDefinitions[2],
            open: true,
            key_diatonicDegree: DiatonicDegreeDefinitions[0],
            key_accidental: AccidentalDefinitions[2],
            concept_type: DEFAULT_CONCEPT_TYPE,
            concept_interval: DEFAULT_CONCEPT,
            concept_chord: DEFAULT_CONCEPT,
            concept_scale: DEFAULT_CONCEPT,
            concept_mode: DEFAULT_CONCEPT,
            octave: 4
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
            viewer: ViewerDefinitions[0]
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
                        <InputWrapper key={childId} name={child.name}>
                            <DropdownSelector
                                updateParameter={(name, param) => { this.setParameter(childId, param); }}
                                parameter={child}
                            />
                        </InputWrapper>);
                }
            }
            selectors.push(
                <InputGroup key={parameter.name} name={parameter.name} icon={parameter.name.charAt(0)}>
                    {children}
                </InputGroup>
            );
        }
        selectors.push(
            <InputGroup name='Octave' icon='O'>
                <InputWrapper name='Value'>
                    <NumericSelector updateValue={(value) => this.setParameter('octave', value) } value={this.state.octave} />
                </InputWrapper>
            </InputGroup>
        );
        return selectors;
    }

    /* Processing */

    getNotes = () => {
        let key = TheoryEngine.getKey(this.state.key_diatonicDegree, this.state.key_accidental);
        let intervals = this.state['concept_' + this.state.concept_type.id].intervals;
        return TheoryEngine.getNotesFromIntervals(key, intervals, this.state.octave);
    }

    /* Render */

    render = () => {
        let Viewer = this.state.viewer_value.component;

        return (
            <div className='view-manager'>
                <div className='view-manager-header'>
                    <div className='view-manager-header-title'>{this.state.viewer_value.name}</div>
                    <div className='view-manager-header-corner-button' onClick={this.toggle}>{this.getSymbol()}</div>
                    <div className='view-manager-header-corner-button' onClick={this.removeViewer}>X</div>
                </div>
                <div className='view-manager-toolbar'>
                    {this.getParameterSelectors()}
                    <IntervalSelector keyDef={TheoryEngine.getKey(this.state.key_diatonicDegree, this.state.key_accidental)}/>
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