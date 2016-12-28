import * as MessageActionTypes from './messageActionTypes';

const initialState = {
	  messages: [{
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
	    posReply: "Nah, I'm just browsing! 🙌",
	    negReply: 'Do not care 👋',
	  },
	  {
	    name: "Geo 'Lo' Cation",
	    content: "Nah, I'm just browsing",
	    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/geo.png",
	    id: 3,
	    user: 'guest',
	    posReply: 'Anything else?',
	    negReply: 'Buzz off!',
	  },
	  {
	    name: "Ecma Scriptnstuff",
	    content: "Cool, anything in particular?",
	    img_src: "http://treehouse-code-samples.s3.amazonaws.com/bootstrap-4/img/ecma.png",
	    id: 4,
	    user: 'host',
	    posReply: 'Seeds for shade 😎',
	    negReply: 'Trees for sun! 🌞',
	  },
	  {
	    name: "Jay Query",
	    content: "Maybe something good for shade?",
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
	    posReply: 'More specific',
	    negReply: 'Sounds delightful 😍',
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
	],
	currentMessageIndex: 1,
	currentMessageType: 'posReply',
}

export default function Stream(state=initialState, action) {

	switch(action.type) {
		case MessageActionTypes.NEGATIVE_MESSAGE: {
			const negativeMessage = state.currentMessageIndex - 1;
			return {
				...state,
				currentMessageIndex: negativeMessage
			}
		}
		case MessageActionTypes.POSITIVE_MESSAGE: {
			const positiveMessage = state.currentMessageIndex + 1;
			return {
				...state,
				currentMessageIndex: positiveMessage
			}
		}
		case MessageActionTypes.SELECT_MESSAGE: {
			const selectMessage = [ ...state.messages, {
				currentMessageIndex: action.index,
			}];
			return {
				...state,
				messages: selectMessage
			}
		}
		default:
			return state;
	}


}
