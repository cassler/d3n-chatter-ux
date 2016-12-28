import * as MessageActionTypes from './messageActionTypes';

export const negativeMessage = val => {
	return {
		type: MessageActionTypes.NEGATIVE_MESSAGE,
		val
	};
};
export const positiveMessage = val => {
	return {
		type: MessageActionTypes.POSITIVE_MESSAGE,
		val
	};
};
export const selectMessage = index => {
	return {
		type: MessageActionTypes.SELECT_MESSAGE,
		index
	};
};