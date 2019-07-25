import * as React from "react";
import "./ViewManager.css";
import { Guitar } from "./GuitarView/Guitar";
import { Piano } from "./PianoView/Piano";
import { BoxSelector } from "../Toolbar/BoxSelector/BoxSelector";
import { ParameterConfig } from "../../../Parameters/MasterParameters";
import { NoteSummarySet } from "./SummaryView/NoteSummarySet";

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
            viewDriver: ViewDriverDefinitions.data[3]
        };
    }

    /* View Driver Creation */

    getViewDriver = () => {
        let def = this.state.viewDriver;
        let ViewDriver = this.getViewDriverClass(def.class);
        return <ViewDriver insertViewDriver={this.insertViewDriver} removeViewDriver={this.removeViewDriver} name={def.name} {...this.props} />
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

    /* Render */

    render = () => {
        return <div id='view-manager'>
            {this.getViewDriver()}
        </div>;
    };
}