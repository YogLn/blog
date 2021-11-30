import { combineReducers } from 'redux-immutable'
import { reducer as articleReducer } from '@/pages/article/store'
import { reducer as detailReducer } from '@/pages/article-detail/store';
import { reducer as photoReducer} from '@/pages/photo/store';
import { reducer as messageReducer} from '@/pages/message/store';

const reducer = combineReducers({
  article: articleReducer,
  detail: detailReducer,
  photo: photoReducer,
  message: messageReducer
})

export default reducer
