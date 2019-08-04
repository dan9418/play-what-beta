import * as React from "react";
import "./BoxSelector.css";

export class BoxSelector extends React.Component<any> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.param.data.length; i++) {
            let option = this.props.param.data[i];
            let displayProp = 'name';
            let classes = ['box-selector-option', this.props.param.id + '-' + option.id];
            if (this.props.selectedValue && option.id === this.props.selectedValue.id) classes.push('active-setting');
            options.push(
                <div
                    key={option.id}
                    className={classes.join(' ')}
                    onClick={() => { this.props.updateSelection(option) }}
                >{option[displayProp]}</div>
            );
        }
        return options;
    }

    render = () => {
        return (
            <div id={'box-selector-' + this.props.param.id} className='box-selector'>
                {<div className='box-selector-label'>{this.props.param.name}</div>}
                {this.getOptions()}
            </div>
        );
    };
}