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
        let classes = ['input-group', this.state.open ? 'open' : 'closed', this.props.toolbarOpen ? 'expanded' : 'collapsed'];
        let openX = this.props.toolbarOpen;
        let openY = this.state.open;
        return (
            <div className={classes.join(' ')}>
                <div className='input-group-header' onClick={this.props.action || this.toggle} onMouseEnter={() => this.setState({ preview: true })} onMouseLeave={() => this.setState({ preview: false })}>
                    <div className='input-group-icon'>
                        {this.props.icon}
                    </div>
                    {openX && <div className='input-group-title'>
                        {this.props.name}
                    </div>}
                    {openX && this.props.children && <div className='input-group-status'>
                        {this.getSymbol()}
                    </div>}
                    {!openX && this.state.preview &&<div className='input-group-content-preview-header'>
                        {this.props.name}
                    </div>}
                    {!openX && this.state.preview &&                    
                    <div className='input-group-content-preview'>
                        {this.props.children}
                    </div>}
                </div>
                {openX && openY && <div className='input-group-content'>
                    {this.props.children}
                </div>}
            </div>
        );
    };
}