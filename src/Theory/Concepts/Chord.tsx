import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";

export class Chord {
    definition: any;
    options: any;
    
    constructor(definition, options) {
        this.definition = definition;
        this.options = options;
    }

    getIntervals = () => {
        return this.definition.intervals;
    }
}