import * as React from "react";
import "./InputGroup.css";

type InputGroupProps = {
    label: string;
    children: any;
}

export class InputGroup extends React.Component<InputGroupProps, null> {

    constructor(props) {
        super(props);
    }

    getItems = () => {
        let items = [];
        if(this.props.children.length) {
           for (let i = 0; i < this.props.children.length; i++) {
                let child = this.props.children[i];
                items.push(<div key={i} className='input-group-item'>{child}</div>);
            } 
        }
        else {
            return <div className='input-group-item'>{this.props.children}</div>;
        }
        return items;
    }

    render = () => {
        return (
            <div className='input-group'>
                <div className='input-group-label'>
                    {this.props.label}
                </div>
                <div className='input-group-content'>
                    {this.getItems()}
                </div>
            </div>
        );
    };
}