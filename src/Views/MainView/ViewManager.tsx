import * as React from "react";
import "./ViewManager.css";
import { Guitar } from "./GuitarView/Guitar";
import { Piano } from "./PianoView/Piano";
import { BoxSelector } from "./Toolbar/BoxSelector/BoxSelector";
import { ParameterConfig } from "../../Parameters/MasterParameters";
import { NoteSummarySet } from "./SummaryView/NoteSummarySet";
import { DiatonicDegreeDefinitions } from "../../Parameters/Key/DiatonicDegreeConfig";
import { AccidentalDefinitions } from "../../Parameters/Key/AccidentalConfig";
import { TheoryEngine } from "../../TheoryCore/TheoryEngine";
import { Toolbar } from "./Toolbar/Toolbar";

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
            key_diatonicDegree: DiatonicDegreeDefinitions[0],
			key_accidental: AccidentalDefinitions[2],
			concept_type: DEFAULT_CONCEPT_TYPE,
			concept_interval: DEFAULT_CONCEPT,
			concept_chord: DEFAULT_CONCEPT,
			concept_scale: DEFAULT_CONCEPT,
			concept_mode: DEFAULT_CONCEPT
        };
    }

    /* View Driver Creation */

    getViewDriver = () => {
        let def = this.state.viewDriver;
        let ViewDriver = this.getViewDriverClass(def.class);
        return <ViewDriver insertViewDriver={this.insertViewDriver} removeViewDriver={this.removeViewDriver} name={def.name} notes={this.getNotes()} {...this.props} />
    }

    getViewDriverClass = (ViewClass) => {
        return class ViewDriver extends React.Component<any, any> {
            constructor(props) {
                super(props);
                this.state = {
                    open: true,
                }
            }

            toggle = () => {
                this.setState((state) => {
                    return { open: !state.open }
                });
            }

            getSymbol: any = () => {
                return (this.state.open ? '-' : '+');
            }

            render = () => {
                return (
                    <div className="view-driver">
                        <div className='view-driver-header'>
                            <div className='corner-button left'></div>
                            <div className='center'>{this.props.name}</div>
                            <div className='right'>
                                <div className='corner-button' onClick={this.toggle}>{this.getSymbol()}</div>
                                <div className='corner-button' onClick={this.props.removeViewDriver}>X</div>
                            </div>
                        </div>
                        <div className='view-driver-body-wrapper'>
                            {this.state.open && <div className='view-driver-body'>
                                <ViewClass {...this.props} />
                            </div>}
                        </div>
                    </div>
                )
            };
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

	getNotes = () => {
		let key = TheoryEngine.getKey(this.state.key_diatonicDegree, this.state.key_accidental);
		let intervals = this.state['concept_' + this.state.concept_type.id].intervals;
		return TheoryEngine.getNotesFromIntervals(key, intervals);
	}

    /* Render */

    render = () => {
        return <div id='view-manager'>
            <Toolbar
                setParameter={this.setParameter}
                {...this.state}
                />
            {this.getViewDriver()}
        </div>;
    };
}