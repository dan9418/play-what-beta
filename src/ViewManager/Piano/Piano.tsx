import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./Piano.css";
import { e } from "../../App";
import { TheoryEngine } from "../../Common/TheoryEngine";

export class Piano extends React.Component<any> {
    keys: any;
	
	constructor(props) {
        super(props);
        this.keys = [];

        for(let i = 0; i < this.props.length; i++) {
            let type = (([0, 2, 4, 5, 7, 9, 11] as any).includes(i % 12)) ? 'WHITE' : 'BLACK';
            this.keys.push({absolutePosition: i, type: type});
        }
    }
    
    getKeys = () => {
        return this.keys.map((key, index) => {
            let physicalNote = TheoryEngine.getNonfunctionalNote(index);
            return e(PianoKey, {
                key: `key-${(physicalNote as any).absolutePosition}`,
                type: key.type,
                physicalNote: physicalNote,
                notes: this.props.notes,
                config: this.props.config
            }, null)
        });
    }

	render = () => {
        return e('span', {},
            e('div', {className: 'piano'},
            this.getKeys())
            )
    };
}

export class PianoKey extends React.Component<any> {
	
	constructor(props) {
        super(props);
    }

    getName = (note) => {
        switch(this.props.config.label)
        {
            case 'none':
                return '';
            case 'name':
                return (note !== null) ? note.name : '';
            case 'interval':
                return (note !== null) ? note.interval.id : '';
            case 'relativePosition':
                return this.props.physicalNote.relativePosition;
            case 'absolutePosition':
                return this.props.physicalNote.absolutePosition
            case 'degree':
                return (note !== null) ? note.interval.degree : '';
            case 'absoluteDegree':
                return (note !== null) ? note.absoluteDegree : '';
            case 'octave':
                return this.props.physicalNote.octave;
            case 'frequency':
                return this.props.physicalNote.frequency;
            default:
                return '';
        }
    }

    getFunctionalNote = () => {
        return this.props.notes.find((note) => {
            return note.relativePosition === this.props.physicalNote.relativePosition;
        }) || null;
    }

	render = () => {
        let note = this.getFunctionalNote();
        let name = this.getName(note);

        if(this.props.type === 'WHITE') {
            return e(WhiteKey, {
                key: `white-key-${this.props.physicalNote.absolutePosition}`,
                physicalNote: this.props.physicalNote,
                note: note,
                label: name,
            }, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {
                key: `black-key-${this.props.physicalNote.absolutePosition}`,
                physicalNote: this.props.physicalNote,
                note: note,
                label: name,
            }, null);
        }
    };
}

export class WhiteKey extends React.Component<any> {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let classes = ['piano-key', 'white-key'];
        if(this.props.note != null) {
            classes.push(`degree-${this.props.note.interval.degree}`)
        } else {
            classes.push(`degree-0`)
        }
		return e('div', {
            className: classes.join(' '),
            onClick: () => { TheoryEngine.playNote(this.props.note); }
        }, this.props.label);
    };
}

export class BlackKey extends React.Component<any> {
	
	constructor(props) {
        super(props);
    }

	render = () => {
        let containerClasses = ['piano-key','black-key-container'];
        let classes = ['piano-key', 'black-key'];
        if(this.props.note != null) {
            classes.push(`degree-${this.props.note.interval.degree}`)
        }
        else {
            classes.push(`black`)
        }
		return e('div', {
                    className: containerClasses.join(' ')
                },
                e('div', {
                    className: classes.join(' '),
                    onClick: () => { TheoryEngine.playNote(this.props.note); }
                }, this.props.label));
    };
}