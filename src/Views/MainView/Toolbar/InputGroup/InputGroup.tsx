import * as React from "react";
import "./InputGroup.css";

export class InputGroup extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: true
        };
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
        let classes = ['input-group'];
        if(!this.state.open)
            classes.push('closed')
        return (
            <div id={'input-group-' + this.props.name} className={classes.join(' ')}>
                <div className='input-group-header'>
                    {this.props.name}
                    <span className='corner-button right' onClick={this.toggle}>
                        {this.getSymbol()}
                    </span>
                </div>
                {this.state.open && <div className='input-group-content'>
                    {this.props.children}
                </div>}
            </div>
        );
    };
}