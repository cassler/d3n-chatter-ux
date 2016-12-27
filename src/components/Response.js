import React, { Component } from 'react';

class Response extends Component {
	render() {
		return (
			<button className="response" ref={this.props.value}>{this.props.text}</button>
		);
	}
}

export default Response;