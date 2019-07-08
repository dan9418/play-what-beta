import * as React from "react";
import * as ReactDOM from "react-dom";
import "../Common/Common.css";
import "./ViewManager.css";
import { NoteCollection } from "./NoteCollection/NoteCollection";
import { PianoViewDriver } from "./Piano/PianoViewDriver";
import { GuitarViewDriver } from "./Guitar/GuitarViewDriver";
import { e } from "../App";

export class ViewManager extends React.Component<any> {

	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: 'view-manager' },
                e(NoteCollection, { notes: this.props.notes }, null),
                e(PianoViewDriver, { notes: this.props.notes }, null),
                e(GuitarViewDriver, { notes: this.props.notes }, null)
            );
    };
}