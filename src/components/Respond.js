import React, { Component, PropTypes } from 'react';

export default class RespondButton extends Component {
	
	static propTypes: {
		negativeMessage: PropTypes.func.isRequired,
		positiveMessage: PropTypes.func.isRequired,
		negativeMessageText: PropTypes.string.isRequired,
		positiveMessageText: PropTypes.string.isRequired,
	};

	state = {
		posVal: 1,
		negVal: -1,
	};

	negativeMessage = (e, val) => {
		if (e) e.preventDefault();
		this.props.negativeMessage(this.state.negVal);
		console.log('negative reply', this.state.negVal);
	};

	positiveMessage = (e, val) => {
		if (e) e.preventDefault();
		this.props.positiveMessage(this.state.posVal);
		console.log('positive reply', this.state.posVal);
	};

	render() {
		return(
			<div className="responses-inner">
				<button onClick={this.positiveMessage}>{this.props.positiveMessageText}</button>
				<button className="respond-yay" onClick={this.negativeMessage}>{this.props.negativeMessageText}</button>
			</div>
		);
	}
}