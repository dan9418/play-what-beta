function getConceptSelector() {
	wrappedComponent = class ConceptSelector extends React.Component {
		constructor(props) {
			super(props);
		}

		setConceptDefinition = (conceptDef) => {
			this.setState({ conceptDef: conceptDef })
			this.props.setConcept(new this.props.conceptClass(conceptDef, this.props.conceptOptions));
		}

		setConceptOptions = (conceptOptions) => {
			this.setState({ conceptOptions: conceptOptions })
			this.props.setConcept(new this.props.conceptClass(this.props.conceptDef, conceptOptions));
		}

		render = () => {
			return (
				<BoxSelector
					updateSelection={(p, v) => { this.setConceptDefinition(v) }}
					key={this.props.conceptConfig.id}
					id={this.props.conceptConfig.id + 'Def'}
					name={this.props.conceptConfig.name + ' Definition'}
					data={this.props.conceptConfig.data}
					selected={this.props.selected}
				/>
			)
		};
	}
	return wrappedComponent;
}