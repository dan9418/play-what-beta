import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import { Guitar } from "./Guitar";
import { LabelSelector } from "../Common/LabelSelector";
import { e } from "../../App";

export class GuitarViewDriver extends React.Component<any> {
	
	constructor(props) {
        super(props);
        (this.state as any) = {
            label: 'interval'
        };
    }

    updateViewDriverState = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

	render = () => {
        return e('div', { id: 'guitar-view-driver' },
                e(Guitar, { functionalNotes: this.props.notes, config: (this.state as any) }, null),
                e(LabelSelector, { updateViewDriverState: this.updateViewDriverState }, null)
            );
    };
}