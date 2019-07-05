function getConceptSelector(conceptClass, config, setConcept) {
	wrappedComponent = class ConceptSelector extends React.Component {
		constructor(props) {
			super(props);
			this.state = {
					conceptDef: config.data[0],
					conceptOptions: null
				};
		}
		
		setConceptDefinition = (conceptDef) => {
			this.setState({ conceptDef: conceptDef })
			setConcept(new conceptClass(conceptDef, this.state.conceptOptions));
		}

		setConceptOptions = (conceptOptions) => {
			this.setState({ conceptOptions: conceptOptions })
			setConcept(new conceptClass(this.state.conceptDef, conceptOptions));
		}

		render = () => {
			return e(BoxSelector, { updateSelection: (p, v) => { this.setConceptDefinition(v) }, id: config.id + 'Def', name: config.name +' Definition', data: config.data, defaultId: '' }, null);
		};
	}
	return wrappedComponent;
}