import * as React from "react";

type IntervalSelectorProps = {
    degree: number;
    offset: number;
}

let INTERVAL_TABLE = [
    ['PU', null, null, null, null, null, null, null, null, null, null, null],
    [null, 'm2', 'M2', 'A2', null, null, null, null, null, null, null, null],
    [null, null, 'd3', 'm3', 'M3', 'A3', null, null, null, null, null, null],
    [null, null, null, null, 'd4', 'P4', 'A4', null, null, null, null, null],
    [null, null, null, null, null, null, 'd5', 'P5', 'A5', null, null, null],
    [null, null, null, null, null, null, null, 'd6', 'm6', 'M6', 'A6', null],
    [null, null, null, null, null, null, null, null, null, 'd7', 'm7', 'M7']
]

export class IntervalSelector extends React.Component<IntervalSelectorProps> {

    constructor(props) {
        super(props);
    }

    getTableCells = () => {
        let rows = [];
        for (let degree = 0; degree < INTERVAL_TABLE.length; degree++) {
            let degreeIntervals = INTERVAL_TABLE[degree];
            let cells = [];

            for (let semitones = 0; semitones < degreeIntervals.length; semitones++) {
                let interval = degreeIntervals[semitones];
                cells.push(<td key={degree + '-' + semitones} className={'degree-' + (degree + 1)}>{interval}</td>);
            }
            rows.push(<tr key={degree} >{...cells}</tr>)
        }
        return <table><tbody>{...rows}</tbody></table>;
    }

    render = () => {
        return (
            <div className='interval-selector'>
                {this.getTableCells()}
            </div>)
    };
}