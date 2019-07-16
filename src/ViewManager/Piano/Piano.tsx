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
            let physicalNote = TheoryEngine.getPhysicalNote(index);
            return e(PianoKey, {
                key: `key-${(physicalNote as any).absolutePosition}`,
                type: key.type,
                physicalNote: physicalNote,
                functionalNotes: this.props.functionalNotes,
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

    sound = () => {
        let duration = 500;
        let audioCtx = new ((window as any).AudioContext || (window as any).webkitAudioContext)();
        let oscillator = audioCtx.createOscillator();
        
        oscillator.type = 'sine';
        oscillator.frequency.value = this.props.physicalNote.frequency;
        oscillator.connect(audioCtx.destination);
        oscillator.start();
            
        setTimeout(() => { oscillator.stop(); }, duration);
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
        return this.props.functionalNotes.find((note) => {
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
                functionalNote: note,
                label: name,
                sound: this.sound
            }, null);
        }
        else if(this.props.type === 'BLACK') {
            return e(BlackKey, {
                key: `black-key-${this.props.physicalNote.absolutePosition}`,
                physicalNote: this.props.physicalNote,
                functionalNote: note,
                label: name,
                sound: this.sound
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
        if(this.props.functionalNote != null) {
            classes.push(`degree-${this.props.functionalNote.interval.degree}`)
        } else {
            classes.push(`degree-0`)
        }
		return e('div', {
            className: classes.join(' '),
            onClick: () => { this.props.sound(); }
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
        if(this.props.functionalNote != null) {
            classes.push(`degree-${this.props.functionalNote.interval.degree}`)
        }
        else {
            classes.push(`black`)
        }
		return e('div', {
                    className: containerClasses.join(' ')
                },
                e('div', {
                    className: classes.join(' '),
                    onClick: () => { this.props.sound(); }
                }, this.props.label));
    };
}