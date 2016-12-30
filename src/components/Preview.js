import React, { Component } from 'react';


class Preview extends Component {
	
	componentDidUpdate(prevProps, prevState) {
		console.log('I updated');	
	};



	render() {		

		return (
			<div className='message-container'>
			<div className={`message key-${this.props.index}`}>
				<div className="message-avatar">
					<div className='circle'></div>
				</div>
				<div className="message-body">
					<p>{this.props.text}</p>
				</div>
			</div>
			</div>
		);
	}
}

Preview.propTypes = {
	text: React.PropTypes.string.isRequired,
	index: React.PropTypes.number.isRequired,
};

export default Preview;