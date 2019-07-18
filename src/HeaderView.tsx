import * as React from "react";
import "./Common/Common.css";

export class HeaderView extends React.Component<any, any> {

	constructor(props) {
		super(props);
	}

	render = () => {
		return (
				<div id='header'>
					<div className='left link-box'>
						<a href="" target="_blank">[Hire Me]</a>
					</div>
					<div className='center'>
						Play What?
					</div>
					<div className='right link-box'>
						<a href="" target="_blank">[GitHub]</a>
					</div>
				</div>
		);
	};
}