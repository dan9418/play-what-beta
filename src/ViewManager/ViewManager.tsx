import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./ViewManager.css";
import { NoteCollection } from "./NoteCollection/NoteCollection";
import { e } from "../App";
import { LabelSelector } from "./Common/LabelSelector";
import { Guitar } from "./Guitar/Guitar";
import { Piano } from "./Piano/Piano";
import { IParamConfig, IParamDef } from "../Common/Parameters/IParamConfig";

export class ViewManager extends React.Component<any, any> {

    PARAM_viewDrivers = {
        id: 'viewDriver',
        name: 'View Drivers',
        data: [
            {
                id: 'pitchClasses',
                name: 'Pitch Classes',
                class: NoteCollection
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
    } as IParamConfig<any>

	constructor(props) {
        super(props);
        this.state = {
            viewDrivers: this.PARAM_viewDrivers.data
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
                            <div className='corner-button right' onClick={this.toggle}>{this.getSymbol()}</div>
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
    
    getViewDrivers = () => {
        return this.state.viewDrivers.map((def) => {
            let ViewDriver = this.getViewDriver(def.class);
            return <ViewDriver functionalNotes={this.props.notes} name={def.name} length={25} {...this.props}/>
        });
    }

	render = () => {
        return <div id='view-manager'>
                {this.getViewDrivers()}
            </div>;
    };
}