import * as React from "react";
import "./Selectors.css";

export class RangeSelector extends React.Component<any, any> {

    constructor(props) {
        super(props);
    }

    render = () => {
        return <div className='range-selector'>
            <div className='low'>
                {this.props.low < this.props.high && <div className='range-button up' onClick={() => { this.props.updateLow(this.props.low + 1); }}>⯅</div>}
                <div className='range-button name'>{this.props.low}</div>
                {this.props.low > this.props.min && <div className='range-button down' onClick={() => { this.props.updateLow(this.props.low - 1); }}>⯆</div>}
            </div>
            <div className='high'>
                {this.props.high < this.props.max && <div className='range-button up' onClick={() => { this.props.updateHigh(this.props.high + 1); }}>⯅</div>}
                <div className='range-button name'>{this.props.high}</div>
                {this.props.high > this.props.low && <div className='range-button down' onClick={() => { this.props.updateHigh(this.props.high - 1); }}>⯆</div>}
            </div>
            <div className='both'>
                {this.props.high < this.props.max && <div className='range-button up' onClick={() => { this.props.updateBoth(1); }}>⯅</div>}
                <div className='range-button name'>*</div>
                {this.props.high > this.props.low && <div className='range-button down' onClick={() => { this.props.updateBoth(-1); }}>⯆</div>}
            </div>
        </div>;
    };
}