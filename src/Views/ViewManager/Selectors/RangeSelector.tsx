import * as React from "react";
import "./Selectors.css";

export class RangeSelector extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return <div className='range-selector'>
            <div className='low'>
                <div className='range-button up' onClick={() => { this.props.updateLow(this.props.low + 1) }}>⯅</div>
                <div className='range-button name'>{this.props.low}</div>
                <div className='range-button down' onClick={() => { this.props.updateLow(this.props.low - 1) }}>⯆</div>
            </div>
            <div className='high'>
                <div className='range-button up' onClick={() => { this.props.updateHigh(this.props.high + 1) }}>⯅</div>
                <div className='range-button name'>{this.props.high}</div>
                <div className='range-button down' onClick={() => { this.props.updateHigh(this.props.high - 1) }}>⯆</div>
            </div>
        </div>;
    };
}