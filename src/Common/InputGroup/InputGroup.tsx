import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./InputGroup.css";

export class InputGroup extends React.Component<any> {

    constructor(props) {
        super(props);
        (this.state as any) = {
            open: true
        };
    }

    toggle = () => {
        this.setState((state) => {
            return { open: !(state as any).open }
        });
    }

    getSymbol: any = () => {
        return ((this.state as any).open ? 'v' : '>');
    }

    render = () => {
        return (
            <div id={'input-group-' + this.props.name} className='input-group'>
                <div className='input-group-header'>
                    {this.props.name}
                    <span className='input-group-symbol' onClick={this.toggle}>
                        {this.getSymbol()}
                    </span>
                </div>
                {(this.state as any).open && <div className='input-group-content'>
                    {this.props.children}
                </div>}
            </div>
        );
    };
}