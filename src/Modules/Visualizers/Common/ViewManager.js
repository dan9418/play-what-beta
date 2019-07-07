class ViewManager extends React.Component {

	constructor(props) {
        super(props);
    }

	render = () => {
        return e('div', { id: 'view-manager' },
                e(NoteCollection, { notes: this.props.notes }, null),
                e(PianoViewDriver, { notes: this.props.notes }, null),
                e(GuitarViewDriver, { notes: this.props.notes }, null)
            );
    };
}