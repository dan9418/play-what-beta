import * as React from "react";
import "./InputGroup.css";

export class InputGroup extends React.Component<any, any> {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            preview: false
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
        let classes = ['input-group', this.state.open ? 'open' : 'closed'];
        return (
            <div className={classes.join(' ')}>
                <div className='input-group-header' onMouseEnter={() => this.setState({ preview: true })} onMouseLeave={() => this.setState({ preview: false })}>
                    <div className='input-group-icon'>
                        {this.props.icon}
                    </div>
                    {this.state.preview &&
                        <div className='input-group-content-preview'>
                            {this.props.children}
                        </div>}
                </div>
                {this.state.open && <div className='input-group-content'>
                    {this.props.children}
                </div>}
            </div>
        );
    };
}