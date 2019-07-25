import * as React from "react";
import "./ViewManager.css";
import { Guitar } from "./GuitarView/Guitar";
import { Piano } from "./PianoView/Piano";
import { BoxSelector } from "./Selectors/BoxSelector/BoxSelector";
import { ParameterConfig, MASTER_PARAMETERS } from "../../Parameters/MasterParameters";
import { NoteSummarySet } from "./SummaryView/NoteSummarySet";
import { DiatonicDegreeDefinitions } from "../../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "../../Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "../../TheoryCore/TheoryEngine";
import { InputGroup } from "./Selectors/InputGroup/InputGroup";

const DEFAULT_CONCEPT_TYPE = {
    id: 'scale',
    name: 'Scales'
}

const DEFAULT_CONCEPT = {
    typeId: 'scale',
    intervals: []
};


export class ViewDriverSelector extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState((state) => {
            return { open: !state.open }
        });
    }

    render = () => {
        return <div className='view-driver-selector'>
            {this.state.open ?
                <div className='view-driver-open' onClick={this.toggle as any}>
                    <BoxSelector
                        updateSelection={this.props.insertViewDriver}
                        param={ViewDriverDefinitions}
                        selectedValue={null}
                    />
                </div> :
                <div className='view-driver-closed' onClick={this.toggle as any}>
                    <span>+</span>
                </div>
            }
        </div>;
    }
}

export let ViewDriverDefinitions = {
    id: 'viewDriver',
    name: 'View Drivers',
    data: [
        {
            id: 'selector',
            name: 'Selector',
            class: ViewDriverSelector
        },
        {
            id: 'noteSummary',
            name: 'Note Summary',
            class: NoteSummarySet
        },
        {
            id: 'piano',
            name: 'Piano',
            class: Piano
        },
        {
            id: 'guitar',
            name: 'Guitar',
            class: Guitar
        }
    ]
} as ParameterConfig

export class ViewManager extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            viewDriver: ViewDriverDefinitions.data[3],
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

    /* View Driver Management */

    insertViewDriver = (def) => {
        this.setState((state) => {
            return {
                viewDriver: def
            };
        });
    }

    removeViewDriver = () => {
        this.setState((state) => {
            return {
                viewDriver: ViewDriverDefinitions.data[0]
            };
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
        let ViewDriver = this.state.viewDriver.class;

        return <div className='view-manager'>
            <div className='view-driver-header'>
                <div className='view-driver-header-title'>{this.state.viewDriver.name}</div>
                <div className='corner-button' onClick={this.toggle}>{this.getSymbol()}</div>
                <div className='corner-button' onClick={this.removeViewDriver}>X</div>
            </div>
            <div className='toolbar'>
                {this.getParameterSelectors()}
            </div>
            <div className="view-driver">
                <div className='view-driver-body-wrapper'>
                    {this.state.open && <div className='view-driver-body'>
                        <ViewDriver insertViewDriver={this.insertViewDriver} notes={this.getNotes()} {...this.props} />
                    </div>}
                </div>
            </div>
        </div>;
    };
}