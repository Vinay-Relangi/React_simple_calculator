import React from 'react';

import './display.css';

class DisplayPage extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div className="display">
                <div className="history">{this.props.data.history}</div>
                <br />
                <div className="active">{this.props.data.value}</div>
			</div>
		);
	}
}

export default DisplayPage;
