import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./ViewManager.css";
import { NoteCollection } from "./NoteCollection/NoteCollection";
import { e } from "../App";
import { LabelSelector } from "./Common/LabelSelector";
import { Guitar } from "./Guitar/Guitar";
import { Piano } from "./Piano/Piano";

export class ViewManager extends React.Component<any> {

	constructor(props) {
        super(props);
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

	render = () => {
        let NoteCollectionViewDriver = this.getViewDriver(NoteCollection);
        let PianoViewDriver = this.getViewDriver(Piano);
        let GuitarViewDriver = this.getViewDriver(Guitar);
        return <div id='view-manager'>
                <NoteCollectionViewDriver functionalNotes={this.props.notes} name="Pitch Classes" {...this.props} />
                <PianoViewDriver functionalNotes={this.props.notes} name="Piano" length={25} {...this.props} />
                <GuitarViewDriver functionalNotes={this.props.notes} name="Guitar" {...this.props} />
            </div>;
    };
}