import { Map } from 'immutable';
import * as actionTypes from './constants';

const initState = Map({
	articleDetail: {},
	commentList: []
})

function reducer(state=initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ARTICLE_DETAIL:
			return state.set('articleDetail', action.articleDetail)
		case actionTypes.CHANGE_COMMENT_LIST:
			return state.set('commentList', action.commentList)
		default:
			return state
	}
}

export default reducer