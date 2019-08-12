import * as React from "react";
import "./InputRow.css";

type InputRowProps = {
    title: string;
    children: any;
    details?: any;
}

type InputRowState = {
    open: boolean;
}

export class InputRow extends React.Component<InputRowProps, InputRowState> {

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
            <div className='input-row'>
                <div className='input-row-title'>
                    {this.props.title}
                </div>
                <div className='input-row-main'>
                    {this.props.children}
                    {this.props.details &&
                        <div className='input-row-toggle' onClick={this.toggle}>{this.getToggleSymbol()}</div>
                    }
                </div>
                {this.state.open &&
                    <div className='input-row-details'>
                        {this.props.details}
                    </div>
                }
            </div>
        );
    };
}