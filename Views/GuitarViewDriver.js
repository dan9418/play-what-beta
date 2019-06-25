class GuitarViewDriver extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            label: LABELS.Interval
        };
    }

    updateViewDriverState = (property, value) => {
        let update = {};
        update[property] = value;
        this.setState(update);
    }

	render = () => {
        return e('div', { id: 'guitar-view-driver' },
                e(Guitar, { functionalNotes: this.props.notes, config: this.state }, null),
                e(LabelSelection, { updateViewDriverState: this.updateViewDriverState }, null)
            );
    };
}