import React, { Component } from 'react';


class Message extends Component {
	
	componentDidUpdate(prevProps, prevState) {
		console.log('I updated');	

	};

	render() {		

		return (
			<div className='message-container'>
			<div className={`message ${this.props.user}`}>
				<div className="message-avatar">
					<div className='circle'></div>
				</div>
				<div className="message-body">
					<p>{this.props.content}</p>
				</div>
			</div>
			</div>
		);
	}
}

Message.propTypes = {
	name: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	id: React.PropTypes.number.isRequired,
	link: React.PropTypes.string,
	img_src: React.PropTypes.string,
	user: React.PropTypes.string.isRequired,
	selectMessage: React.PropTypes.func.isRequired,
	positiveMessage: React.PropTypes.func.isRequired,
	negativeMessage: React.PropTypes.func.isRequired,
};

export default Message;