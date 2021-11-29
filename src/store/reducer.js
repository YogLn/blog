import { combineReducers } from 'redux-immutable'
import { reducer as articleReducer } from '@/pages/article/store'
import { reducer as detailReducer } from '@/pages/article-detail/store';

const reducer = combineReducers({
  article: articleReducer,
  detail: detailReducer
})

export default reducer
