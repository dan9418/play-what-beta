class ViewDriver extends React.Component {
	
	constructor(props) {
        super(props);
        this.state = {
            label: LABELS.Interval
        };
    }


	render = () => {
        return e('div', { id: 'visualizers' },
                e(Piano, { functionalNotes: this.props.notes, length: 25 }, null),
                e(Guitar, { functionalNotes: this.props.notes }, null)
            );
    };
}