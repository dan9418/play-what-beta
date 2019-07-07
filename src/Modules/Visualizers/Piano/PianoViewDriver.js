class PianoViewDriver extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            label: 'interval'
        };
    }

    updateViewDriverState = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

	render = () => {
        return e('div', { id: 'piano-view-driver' },
                e(Piano, { functionalNotes: this.props.notes, length: 25, config: this.state }, null),
                e(LabelSelector, { updateViewDriverState: this.updateViewDriverState }, null)
            );
    };
}