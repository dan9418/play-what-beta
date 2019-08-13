import * as React from "react";

type RadioSelectorProps = {
    data: any[];
    value: any;
    setValue: (value) => void;
}

export class RadioSelector extends React.Component<RadioSelectorProps> {

    constructor(props) {
        super(props);
    }

    getOptions = () => {
        let options = [];
        for (let i = 0; i < this.props.data.length; i++) {
            let param = this.props.data[i];
            options.push(
                <input
                    key={param.id}
                    name={param.id}
                    value={param.id}
                    onChange={() => this.props.setValue(param)}
                    className={'radio-option'}>
                    {param.name}
                </input>
            );
        }
        return options;
    }

    render = () => {
        return (
            <div className='radio-selector'>
                {this.getOptions()}
            </div>)
    };
}