import React, { Component } from 'react';

class RedditPost extends Component {

	render() {
		
		const info = this.props;

		console.log(info);
		
		return( 
			<div className='postListItem' key={this.props.id}>
			
				<img className="postThumbnail" src={this.props.img} />
				<div className="postContent">
					<h5 className="postScore">{this.props.score}</h5>
					<h3 className="postTitle">
						<a href={`http://reddit.com/${this.props.permalink}`}>
						{this.props.title}
						</a>
					</h3>
					<small>{this.props.author}</small>
				</div>
			</div>
		)
	}

}

export default RedditPost;