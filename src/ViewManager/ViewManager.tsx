import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./ViewManager.css";
import { PitchClassSet } from "./PitchClassSet/PitchClassSet";
import { e } from "../App";
import { LabelSelector } from "./Common/LabelSelector";
import { Guitar } from "./Guitar/Guitar";
import { Piano } from "./Piano/Piano";
import { BoxSelector } from "../Toolbar/BoxSelector/BoxSelector";
import { ParameterConfig } from "../Parameters/MasterParameters";

export let ViewDriverDefinitions = {
        id: 'viewDriver',
        name: 'View Drivers',
        data: [
            {
                id: 'pitchClassSet',
                name: 'Pitch Class Set',
                class: PitchClassSet
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
            viewDrivers: ViewDriverDefinitions.data
        };
    }

    getViewDriver = (ViewClass) => {
		return class ViewDriver extends React.Component<any, any> {
			constructor(props) {
                super(props);
                this.state = {
                    open: true,
                    label: 'interval'
                }
			}
	
			updateViewDriverState = (property, value) => {
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
                                <ViewClass config={this.state} {...this.props}/>
                                <LabelSelector updateViewDriverState={this.updateViewDriverState} />
                            </div>}
                        </div>
					</div>
				)
			};
		};
    }

    insertViewDriver = (index, def) => {
        this.setState((state) => {
            return {
                viewDrivers: [...state.viewDrivers.slice(0, index), def, ...state.viewDrivers.slice(index)]
            };
        });
    }

    removeViewDriver = (index) => {
        this.setState((state) => {
            return {
                viewDrivers: [...state.viewDrivers.slice(0, index), ...state.viewDrivers.slice(index + 1)]
            };
        });
    }
    
    getViewDrivers = () => {
        let viewDrivers = [<ViewDriverSelector insertViewDriver={(newDef) => this.insertViewDriver(0, newDef)} key={'vds-0'} />];
        for(let i = 0; i < this.state.viewDrivers.length; i++) {
            let def = this.state.viewDrivers[i];
            let ViewDriver = this.getViewDriver(def.class);
            viewDrivers.push(<ViewDriver key={i} removeViewDriver={() => this.removeViewDriver(i)} functionalNotes={this.props.notes} name={def.name} length={25} {...this.props}/>);
            viewDrivers.push(<ViewDriverSelector insertViewDriver={(newDef) => this.insertViewDriver(i+1, newDef)} key={'vds-' + i+1} />);
        }
        return viewDrivers;
    }

	render = () => {
        return <div id='view-manager'>
                {this.getViewDrivers()}
            </div>;
    };
}

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
        return  <div className='view-driver-selector'>
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