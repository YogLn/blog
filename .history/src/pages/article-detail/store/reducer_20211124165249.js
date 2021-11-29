import { Map } from 'immutable';
import * as actionTypes from './constants';

const initState = Map({
	articleDetail: {}
})

function render(state=initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ARTICLE_DETAIL:
			return state.set('articleDetail', action.articleDetail)

		default:
			return state
	}
}

export default reducer