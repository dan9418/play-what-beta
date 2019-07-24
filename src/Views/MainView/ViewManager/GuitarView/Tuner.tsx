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
        return <div className='tuner'>
            <div className='tuner-control up' onClick={() => { this.props.tuneString(this.props.openPosition + 1) }}>^</div>
            <div className='tuner-label'>{this.props.openPosition}</div>
            <div className='tuner-control down' onClick={() => { this.props.tuneString(this.props.openPosition - 1) }}>v</div>
            <div className='tuner-control remove' onClick={this.props.removeString}>x</div>
        </div>;
    };
}