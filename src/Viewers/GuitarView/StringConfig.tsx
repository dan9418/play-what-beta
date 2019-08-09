import * as React from "react";
import "./GuitarView.css";


export class Tuner extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return <div className='string-controls'>
            <div className='string-button tune-up' onClick={() => { this.props.tuneString(this.props.openPosition + 1) }}>⯅</div>
            <div className='string-button name'>{this.props.openPosition}</div>
            <div className='string-button tune-down' onClick={() => { this.props.tuneString(this.props.openPosition - 1) }}>⯆</div>
            <div className='string-button remove' onClick={this.props.removeString}>🗑</div>
            <div className='tuner-string' />
        </div>;
    };
}