import React from 'react';
import Button from '@material-ui/core/Button';

import './buttonPanel.css';

class ButtonPanelPage extends React.Component {

	lastKeyStroke = 0;

	constructor(props) {
		super(props);

		this.state = {
			buttons: ['9','8','7','6','5','4','3','2','1','C','0','+','-','*','/','%','=']
		  }
	}

	handleClick = (e) => {
		let value = e.currentTarget.value;
		
		if(!isNaN(value)){
			this.setHistory(this.props.data.history + value.toString());
			this.setValue(this.props.data.value * 10 + parseInt(value));
		}
		else if(!isNaN(this.lastKeyStroke) || (this.lastKeyStroke === '=' && value !== '=') || value === 'C'){
				this.props.performOperation(value);
		}
		this.lastKeyStroke = value;
	};


	setHistory(history){
        this.props.setHistory(history);
	}

	setValue(value){
        this.props.setValue(value);
	}

	render() {
		let buttons = this.state.buttons;
		return (
			<div className="buttonPanel">
				{
					buttons.map((val, index) => {
						return (
							<Button variant="outlined" className={"default-button " + (val === '=' ? 'equal-class' : '')} onClick={(e) => this.handleClick(e)} value={val} key={index}>
								{val}
							</Button>
						);
					})
				}

			</div>
		);
	}
}

export default ButtonPanelPage;
