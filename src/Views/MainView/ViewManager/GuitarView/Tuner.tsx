import * as React from "react";
import "./GuitarView.css";

type TunerProps = {
    tuneString: any;
    removeString: any;
    openPosition: number;
}

type TunerState = {
    openPosition: number;
}

export class Tuner extends React.Component<TunerProps, TunerState> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return <div className='string-controls'>
            <div className='string-button tune-up' onClick={() => { this.props.tuneString(this.props.openPosition + 1) }}>^</div>
            <div className='string-button name'>{this.props.openPosition}</div>
            <div className='string-button tune-down' onClick={() => { this.props.tuneString(this.props.openPosition - 1) }}>v</div>
            <div className='string-button remove' onClick={this.props.removeString}>x</div>
        </div>;
    };
}