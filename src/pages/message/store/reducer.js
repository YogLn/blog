import { Map } from 'immutable';
import * as actionTypes from './constant';

const initState = Map({
	messageList: [],
	musicList: []
})

function reducer(state = initState, action) {
	switch(action.type) {
		case actionTypes.CHANGE_MESSAGE_LIST:
			return state.set('messageList', action.messageList)
		case actionTypes.CHANGE_MUSIC_LIST:
			return state.set('musicList', action.musicList)
		default:
			return state
	}
}

export default reducer