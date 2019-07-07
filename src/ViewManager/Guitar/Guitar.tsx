import * as React from "react";
import * as ReactDOM from "react-dom";
import "../../Common/Common.css";
import "./Guitar.css";
import { e } from "../../App";
import { PhysicalNote } from "../../Theory/Base/PhysicalNote";

export class Guitar extends React.Component<any> {
    strings: any[];
	
	constructor(props) {
        super(props);
        this.strings = [
            { openPosition:  16 },  // e
            { openPosition:  11 },  // B
            { openPosition:  7  },  // G
            { openPosition:  2  },  // D
            { openPosition: -3  },  // A
            { openPosition: -8  }   // E   
        ];
    }

    getStrings = () => {
        return this.strings.map((string, index) => {
            return e(String, {
                key: `key-${index}`,
                functionalNotes: this.props.functionalNotes,
                openPosition: string.openPosition,
                config: this.props.config
            }, null);
        });
    }

	render = () => {
        return e('div', {className: 'guitar'},
            this.getStrings()
        );
    };
}

export class String extends React.Component<any> {
	
	constructor(props) {
        super(props);
    }

    getFrets = () => {
        let frets = [];
        for(let i = 0; i <= 12; i++) {
            let physicalNote = new PhysicalNote(this.props.openPosition + i);
            frets.push(e(Fret, {
                key: `fret-${i}`,
                functionalNotes: this.props.functionalNotes,
                physicalNote: physicalNote,
                open: (i === 0),
                config: this.props.config
            }, null));
        }
        return frets;
    }

	render = () => {
        let classes = ['guitar-string'];
		return e('div', {className: classes.join(' ')}, this.getFrets());
    };
}

export class Fret extends React.Component<any> {
	
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
        let classes = ['guitar-fret'];
        if(this.props.open)
            classes.push('guitar-fret-open');
        let note = this.getFunctionalNote();
        if(note !== null)
            classes.push(`degree-${note.interval.degree}`);
        else
            classes.push(`wood`);
        let name = this.getName(note);

		return e('div', {
            className: classes.join(' '),
            onClick: () => { this.sound(); }
        }, name);
    };
}