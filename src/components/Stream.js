
import React from 'react';
// import ReactDOM from 'react-dom';
import Message from './Message';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group' // ES6

const RESPONSES = [
  {
    name: "Angie McAngular",
    content: "Hey there, welcome to American Meadows!",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/angie.png",
    id: 1,
    user: 'host',
    posReply: 'What up! 🙌',
    negReply: '😕 Meh... ',
  },
  {
    name: "NodeStradamus",
    content: "Did you know we're offering 50% on sping-planted perennials? Want to take a look?",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/nodestradamus.png",
    id: 2,
    user: 'host',
    posReply: 'Tell me more! 🙌',
    negReply: 'Do not care 👋',
  },
  {
    name: "Geo 'Lo' Cation",
    content: "Nah, I'm just browsing",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png",
    id: 3,
    user: 'guest',
    posReply: 'Is that so?',
    negReply: 'No way.',
  },
  {
    name: "Ecma Scriptnstuff",
    content: "Cool, anything in particular?",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png",
    id: 4,
    user: 'host',
    posReply: 'Jeff wins!',
    negReply: 'You lose!',
  },
  {
    name: "Jay Query",
    content: "Great question, maybe something good for shade?",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/jay.png",
    id: 5,
    user: 'guest',
    posReply: '😎 Mmmm, yes... shade...',
    negReply: 'Show me the light! ',
  },
  {
    name: "Json Babel",
    content: "Sure, our Partial Shade mixture contains 26 shade-tolerant wildflowers, both annuals and perennials, designed to bloom all season long, year after year. Just tap this message to see more.",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png",
    id: 6,
    user: 'host',
    posReply: 'Sounds delightful 😍',
    negReply: 'wtf',
  },
  {
    name: "Json Babel",
    content: "I'm looking for a specific species",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png",
    id: 7,
    user: 'guest',
    posReply: 'Which kind!? 🌷',
    negReply: 'Avocado! 🥑',
  },
  {
    name: "Json Babel",
    content: "Ok, species good for shade. How about these Forget Me Not Seeds? A classic.",
    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/json.png",
    id: 8,
    user: 'host',
    posReply: 'Found it 🙌 🙌 🙌',
    negReply: 'Nevermind',
  }

];

var Stream = React.createClass({
		
	propTypes: {
		index: React.PropTypes.number.isRequired,
		initialMessages: React.PropTypes.arrayOf(React.PropTypes.shape({
			name: React.PropTypes.string.isRequired,
			content: React.PropTypes.string.isRequired,
			id: React.PropTypes.number.isRequired,
			link: React.PropTypes.string,
			user: React.PropTypes.string.isRequired,
		})).isRequired,
	},

	getDefaultProps: function() {
		return {
			index: 1,
			initialMessages: RESPONSES,
			complete: false,
		}
	},

	getInitialState() {
		return {
			index: 1,
			messages: this.props.initialMessages,	
			posReply: this.props.initialMessages[0].posReply,
			negReply: this.props.initialMessages[0].negReply,
		}
	},

	replyPositive: function() {
		if ( this.state.index < this.props.initialMessages.length ) {
			this.state.posReply = this.props.initialMessages[this.state.index].posReply;
			this.state.negReply = this.props.initialMessages[this.state.index].negReply;
			var count = this.state.index += 1;
			this.setState(this.state);
		} else {
			this.state.complete = true
		}
		
	},

	replyNegative: function() {
		if ( this.state.index > 1 ) {
			var count = this.state.index -= 1;
			this.state.complete = false;
			this.setState(this.state);
			this.state.posReply = this.props.initialMessages[this.state.index - 1].posReply;
			this.state.negReply = this.props.initialMessages[this.state.index - 1].negReply;
			this.setState(this.state);

		} 
		
		this.setState(this.state);
	},


	render: function() {
		return (
			<div className="chatterbox">
			<div className="message-container">
				<ReactCSSTransitionGroup
		          transitionName="example"
		          transitionEnterTimeout={500}
		          transitionLeaveTimeout={300}>
				{this.state.messages.map(function(message, index) {
					return (
						<Message 
							name={message.name}
							content={message.content}
							key={index}
							id={message.id}
							user={message.user}
							yay={message.posReply}
							nay={message.negReply}
						/>
					);
				}).slice(0, this.state.index)}
				</ReactCSSTransitionGroup>
			</div>
			<div className="response-container">
				<button className="btn" onClick={this.replyPositive}>{this.state.posReply}</button>
				<button className="btn" onClick={this.replyNegative}>{this.state.negReply}</button>
			</div>
			</div>
		);
	}
});

export default Stream;