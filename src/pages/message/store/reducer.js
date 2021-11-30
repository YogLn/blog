import { Map } from 'immutable';
import * as actionTypes from './constant';

const initState = Map({
	messageList: []
})

function reducer(state = initState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_MESSAGE_LIST:
			return state.set('messageList', action.messageList)
		default:
			return state
	}
}

export default reducer