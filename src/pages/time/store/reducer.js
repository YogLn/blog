import { Map } from 'immutable';
import * as actionTypes from './constant';
const initState = Map({
	archiveList: []
})

function reducer(state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ARCHIVE_LIST:
			return state.set('archiveList', action.archiveList);
		default:
			return state
	}
}

export default reducer
