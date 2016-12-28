import React, { Component, PropTypes } from 'react';

// Redux Workers
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as MessageActionCreators from '../actions/messageActions';


import Message from './Message';
import Respond from './Respond';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6


class Stream extends Component {
	
	static propTypes = {
		messages: PropTypes.array.isRequired,
		currentMessageIndex: PropTypes.number.isRequired,
	};

	render() {

		const { dispatch, messages, currentMessageIndex } = this.props;
		const negativeMessage = bindActionCreators(MessageActionCreators.negativeMessage, dispatch);
		const positiveMessage = bindActionCreators(MessageActionCreators.positiveMessage, dispatch);
		const selectMessage = bindActionCreators(MessageActionCreators.selectMessage, dispatch);		

		const messageComponents = messages.map((message, index) => (
			<Message 
				name={message.name}
				content={message.content}
				key={index}
				id={message.id}
				user={message.user}
				selectMessage={selectMessage}
				positiveMessage={positiveMessage}
				negativeMessage={negativeMessage}
			/>
		)).slice(0, currentMessageIndex);

		return (
			<div className="chatterbox">
				<div className="message-container">
					<ReactCSSTransitionGroup
						transitionName="example"
						transitionEnterTimeout={500}
						transitionLeaveTimeout={300}>
						{ messageComponents }
					</ReactCSSTransitionGroup>
				</div>
				<Respond positiveMessage={positiveMessage} negativeMessage={negativeMessage}/>
			</div>
		);
	}
}

const mapStateToProps = state => (
	{
		messages: state.messages,
		currentMessageIndex: state.currentMessageIndex	
	}
);

export default connect(mapStateToProps)(Stream);