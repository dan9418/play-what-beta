class Piano extends React.Component {
	
	constructor(props) {
		super(props);
	}

	render = () => {
		return e('div', {className: 'piano'},
            e('div', {className: 'piano-key white-key'}, 'C'),
            e('div', {className: 'piano-key black-key'}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: 'piano-key white-key'}, 'D'),
            e('div', {className: 'piano-key black-key'}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: 'piano-key white-key'}, 'E'),
            e('div', {className: 'piano-key white-key'}, 'F'),
            e('div', {className: 'piano-key black-key'}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: 'piano-key white-key'}, 'G'),
            e('div', {className: 'piano-key black-key'}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: 'piano-key white-key'}, 'A'),
            e('div', {className: 'piano-key black-key'}, e('div', {className: 'black-key-top'}, null)),
            e('div', {className: 'piano-key white-key'}, 'B')
		);
	};
}