import { Map } from 'immutable';
import * as actionTypes from './constants';

const initState = Map({
	articleList: [],
	total: 0,
	labelList: [],
	userInfo: {},
	home: true
})

function reducer (state = initState, action) {
	switch (action.type) {
		case actionTypes.CHANGE_ARTICLE_LIST:
			return state.set('articleList', action.articleList)
		case actionTypes.CHANGE_ARTICLE_TOTAL:
			return state.set('total', action.total)
		case actionTypes.CHANGE_LABELS_LIST:
			return state.set('labelList', action.labelList)
		case actionTypes.CHANGE_USER_INFO:
			return state.set('userInfo', action.userInfo)
		default:
			return state
	}
}

export default reducer
