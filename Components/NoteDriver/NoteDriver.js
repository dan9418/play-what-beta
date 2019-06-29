class NoteDriver extends React.Component {
	
	constructor(props) {
    super(props);
	}
	
	getNotes = () => {
		return [];
	}

	render = () => {
		let notes = this.getNotes();

    return e('div', { id: 'note-driver-container' },
				e(ViewManager, { notes: notes }, null),
    );
  };
}