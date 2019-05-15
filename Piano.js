class Piano extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		return e('div', {className: 'piano'},
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'C'})) ? 'piano-key-active' : ''}`}, 'C'),
            e('div', {className: `piano-key black-key`}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'D'})) ? 'piano-key-active' : ''}`}, 'D'),
            e('div', {className: `piano-key black-key`}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'E'})) ? 'piano-key-active' : ''}`}, 'E'),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'F'})) ? 'piano-key-active' : ''}`}, 'F'),
            e('div', {className: `piano-key black-key`}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'G'})) ? 'piano-key-active' : ''}`}, 'G'),
            e('div', {className: `piano-key black-key`}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'A'})) ? 'piano-key-active' : ''}`}, 'A'),
            e('div', {className: `piano-key black-key`}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: `piano-key white-key ${(this.props.notes.find((e) => {return e.getName() === 'B'})) ? 'piano-key-active' : ''}`}, 'B')
        );
    };
}