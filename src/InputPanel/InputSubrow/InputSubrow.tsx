import * as React from "react";
import "./InputSubrow.css";

type InputSubrowProps = {
    children: any;
    details?: any;
}

type InputSubrowState = {
    open: boolean;
}

export class InputSubrow extends React.Component<InputSubrowProps, InputSubrowState> {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    }

    toggle = () => {
        this.setState((oldState) => {
            return {
                open: !oldState.open
            }
        })
    }

    getToggleSymbol = () => {
        return this.state.open ? '-' : '+';
    }

    render = () => {
        return (
            <div className='input-subrow'>
                <div className='input-subrow-main'>
                    {this.props.children}
                    {this.props.details &&
                        <div className='input-subrow-toggle' onClick={this.toggle}>{this.getToggleSymbol()}</div>
                    }
                </div>
                {this.state.open &&
                    <div className='input-subrow-details'>
                        {this.props.details}
                    </div>
                }
            </div>
        );
    };
}