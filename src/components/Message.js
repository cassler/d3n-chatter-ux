import React, { Component } from 'react';


class Message extends Component {

	render() {
		return (
			<div className={`message ${this.props.user}`}>
				<div className="message-avatar">
					<div className='circle'></div>
				</div>
				<div className="message-body">{this.props.content}</div>
			</div>
		);
	}
}

Message.propTypes = {
	name: React.PropTypes.string.isRequired,
	content: React.PropTypes.string.isRequired,
	id: React.PropTypes.number.isRequired,
	link: React.PropTypes.string,
	user: React.PropTypes.string.isRequired,
}

export default Message;