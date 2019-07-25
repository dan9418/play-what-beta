import * as React from "react";
import "./HeaderView.css";

export class HeaderView extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div id='header'>
					<div className='link-box float-left'>
						<a href="" target="_blank">[Hire Me]</a>
					</div>
					<div className='center'>
						Play What?
					</div>
					<div className='link-box float-right'>
						<a href="" target="_blank">[GitHub]</a>
					</div>
				</div>
		);
	};
}