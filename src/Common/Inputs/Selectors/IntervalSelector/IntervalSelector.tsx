import * as React from "react";
import './IntervalSelector.css';
import { Key, Interval } from "../../../Theory/TheoryDefinitions";
import { TheoryEngine2 } from "../../../Theory/TheoryEngine2";

type IntervalSelectorProps = {
    keyDef: Key;
    value: Interval[];
    setValue: (value: Interval[]) => void;
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

    isIntervalSelected = (degree: number, semitones: number): boolean => {
       let interval = this.props.value.find((interval) => { return interval.degree === degree && interval.semitones === semitones; } );
       return typeof(interval) !== 'undefined';
    }

    toggleInterval = (degree: number, semitones: number, name: string) => {
        for(let i = 0; i < this.props.value.length; i++) {
            let interval = this.props.value[i];
            if(interval.degree === degree && interval.semitones === semitones) {
                this.props.setValue([...this.props.value.slice(0, i), ...this.props.value.slice(i + 1)]);
                return;
            }
            else if (interval.degree > degree && interval.semitones > semitones) {
                this.props.setValue([...this.props.value.slice(0, i), { id: name, name: name, degree: degree, semitones: semitones }, ...this.props.value.slice(i)]);
                return;
            }
        }
        this.props.setValue([...this.props.value, { id: name, name: name, degree: degree, semitones: semitones }]);
    }

    getTableCells = () => {
        let rows = [];
        for (let degree = 1; degree <= INTERVAL_TABLE.length; degree++) {
            let degreeIntervals = INTERVAL_TABLE[degree - 1];
            let cells = [];

            for (let semitones = 0; semitones < degreeIntervals.length; semitones++) {
                let interval = degreeIntervals[semitones];
                let classes = [];
                if(this.isIntervalSelected(degree, semitones)) {
                    classes.push('selected');
                }
                else {
                    classes.push((interval !== null) ? 'degree-' + degree : 'inactive');
                }
               
                cells.push(
                    <td key={degree + '-' + semitones} className={classes.join(' ')} onClick={() => this.toggleInterval(degree, semitones, interval)}>
                        {TheoryEngine2.getFunctionalNote(this.props.keyDef, { degree: degree, semitones: semitones, id: interval, name: interval }, 4).name}
                    </td>);
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